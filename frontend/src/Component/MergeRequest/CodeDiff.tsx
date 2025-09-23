
import { Diff, Hunk, parseDiff } from "react-diff-view";
import "react-diff-view/style/index.css";
import { createPatch } from "diff";

const oldCode = `
CREATE OR REPLACE FUNCTION get_user(id INT)
RETURNS TABLE(name TEXT, age INT) AS $$
BEGIN
  RETURN QUERY SELECT name, age FROM users WHERE user_id = id;
END;
$$ LANGUAGE plpgsql;
`;

const newCode = `
CREATE OR REPLACE FUNCTION get_user(id INT)
RETURNS TABLE(name TEXT, age INT, email TEXT) AS $$
BEGIN
  RETURN QUERY SELECT name, age, email FROM users WHERE user_id = id;
END;
$$ LANGUAGE plpgsql;
`;

export default function CodeDiff() {
  // Generate a git-style patch
  const rawPatch = createPatch("func.sql", oldCode, newCode, "", "", { context: 3 });
  const diffText = `diff --git a/func.sql b/func.sql\n${rawPatch}`;
  const files = parseDiff(diffText);
  const diff = files.length > 0 ? files[0] : null;

  if (!diff || !diff.hunks || diff.hunks.length === 0) {
    return (
      <div className="bg-gray-900 text-gray-300 p-4 rounded font-mono text-sm min-h-screen flex items-center justify-center">
        No differences found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-start justify-center p-8">
      <div className=" border border-gray-700 rounded shadow-md font-mono text-sm overflow-x-auto w-full max-w-5xl">
        {/* Header */}
        <div className="flex justify-between px-4 py-2 border-b border-gray-700 text-sm">
          <span className="text-red-400">a/func.sql</span>
          <span className="text-green-400">b/func.sql</span>
        </div>

        {/* Tailwind overrides for react-diff-view */}
        <style>
          {`
            .diff-line.add { @apply  text-red-900; }
            .diff-line.del { @apply  text-green-400; }
            .diff-line.context { @apply  text-gray-400; }
            .diff-gutter { @apply  text-gray-500; }
            .diff-code { @apply  text-gray-300; }
          `}
        </style>

        {/* Diff */}
        <div className="p-2 0 text-blue-500">
          <Diff viewType="split" diffType="modify" hunks={diff.hunks}>
            {(hunks) => hunks.map((hunk) => <Hunk key={hunk.content} hunk={hunk} />)}
          </Diff>
        </div>

        <div className="flex justify-end m-2">
            <div>
                <button
                className="border p-2 rounded hover:bg-green-300 hover:text-green-950">Merge</button>
            </div>
        </div>
      </div>
    </div>
  );
}

interface DBRegisterLabelName{
    project_title: string,
    ip: string,
    username: string,
    password: string,
    databasename: string
}

interface DBFORMLABEL {
    name : keyof DBRegisterLabelName,
    label: string,
    type: string,
    placeholder: string
}

export const DBRegisterForm:DBFORMLABEL[] = [
    {name : "project_title", label: "Project name:", type:"text", placeholder: "Enter project name"},
    {name: "ip", label: "Database IP:", type: "text", placeholder:"Enter the database IP address"},
    {name: "username", label:"Database Username:", type:"text", placeholder:"Enter the database username"},
    {name: "password", label:"Database Password:", type:"text", placeholder:"Enter the database password"},
    {name:"databasename", label:"Database Name:", type:"text", placeholder:"Enter the database name"}
]
type Skill = {
  tool: string;
  description: string[];
};
export class Experience {
  static role = "Technical Skills";
  static projects: Skill[] = [
    {
      tool: "Languages & Frameworks",
      description: [
        "C#",
        "Java",
        "ASP.NET Core",
        "MVC",
        "WPF",
        "Tailwind",
        "ReactJs",
        "Laravel",
        "PHP",
      ],
    },
    {
      tool: "Database & Data Access",
      description: [
        "MSSQL Server",
        "MySQL",
        "SQLite",
        "Entity Framework Core",
        "Dapper",
      ],
    },
    {
      tool: "Architecture & Design Patterns",
      description: ["MVVM", "N-Tier Architecture"],
    },
    {
      tool: "Tools & Platforms",
      description: [
        "Visual Studio",
        "Git/GitHub",
        "SQL Server Management Studio (SSMS)",
        "Framer Motion",
        "Notion",
      ],
    },
    {
      tool: "Other Skills",
      description: [
        "LINQ, CRUD Operations, Debugging & Troubleshooting",
        "Object-Oriented Programming (OOP) Principles",
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Figma (basic UI wireframing and prototyping)",
      ],
    },
  ];
}

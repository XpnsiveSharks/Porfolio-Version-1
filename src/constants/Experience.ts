type Project = {
  name: string;
  type: string;
  description: string[];
};
export class Experience {
  static role = "Academic Developer";
  static projects: Project[] = [
    {
      name: "Point of Sale (POS) System",
      type: "School Project",
      description: [
        "Developed using ASP.NET Core MVC with a clean N-Tier Architecture.",
        "Integrated Entity Framework Core for ORM-based data access with MSSQL Server.",
        "Used GitHub for version control and team collaboration.",
      ],
    },
    {
      name: "Jumbled Words (WPF Application)",
      type: "School Project",
      description: [
        "Developed the backend logic using C# for a desktop word game application built with WPF.",
        "Utilized SQLite for lightweight, embedded database management.",
        "Implemented game mechanics including random word jumbling, answer validation, and score tracking.",
      ],
    },
    {
      name: "Milk Tea Shop POS System",
      type: "Thesis Project",
      description: [
        "Designed and developed a Point of Sale system for a milk tea business using Java and MySQL.",
        "Implemented key features including order processing, inventory tracking, and sales reporting.",
        "Designed a user-friendly interface for staff to manage orders and generate transaction history.",
        "Demonstrated full-stack development skills and practical application of database integration.",
      ],
    },
  ];
}

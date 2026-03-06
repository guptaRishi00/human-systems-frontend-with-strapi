export interface UserStory {
    role: string;
    story: string;
}

export interface FeatureGroup {
    groupName: string;
    stories: UserStory[];
}

export interface Module {
    slug: string;
    moduleNumber: number;
    title: string;
    shortTitle: string;
    objective: string;
    description: string;
    features: string[];
    featureGroups: FeatureGroup[];
    icon: string; // react-icons icon name key
    category: "functional" | "platform";
}

export const modules: Module[] = [
    {
        slug: "core-hr",
        moduleNumber: 1,
        title: "Core HR & Employee Administration",
        shortTitle: "Core HR",
        objective:
            "To establish a centralized and secure database for managing all employee information, contracts, and lifecycle events.",
        description:
            "Centralized employee profiles, contract management with versioning, automated probation alerts, and customizable onboarding & offboarding checklists.",
        features: [
            "Employee Profile Management (Create, Edit, Deactivate)",
            "Customizable Profile Fields",
            "Contract Management & Versioning",
            "Automated Contract & Probation Alerts",
            "Onboarding & Offboarding Checklist Management",
        ],
        featureGroups: [
            {
                groupName: "Employee Profiles",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can create, view, edit, and deactivate employee profiles.",
                    },
                    {
                        role: "HR Admin",
                        story:
                            "I can define custom fields for employee profiles (e.g., T-shirt size, dietary restrictions).",
                    },
                    {
                        role: "Employee",
                        story: "I can view my own profile information.",
                    },
                ],
            },
            {
                groupName: "Contract Management",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can upload and manage multiple contracts for each employee.",
                    },
                    {
                        role: "HR Admin",
                        story:
                            "I can set key contract dates (start, end, probation end) which trigger automated alerts.",
                    },
                ],
            },
            {
                groupName: "Onboarding & Offboarding Checklists",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can create customizable onboarding and offboarding checklist templates.",
                    },
                    {
                        role: "Manager",
                        story:
                            "I can assign a checklist to a new hire and track the completion of tasks.",
                    },
                ],
            },
            {
                groupName: "Alerts & Notifications",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I want to receive an email and in-app notification 30 days before a contract or probation period ends.",
                    },
                ],
            },
        ],
        icon: "users",
        category: "functional",
    },
    {
        slug: "document-management",
        moduleNumber: 2,
        title: "Document Management (HR Vault)",
        shortTitle: "HR Vault",
        objective:
            "To provide a secure, permission-based repository for all HR-related documents.",
        description:
            "Secure, permission-based document repository with categorization, role-based access control, and automated expiration alerts for work permits and certifications.",
        features: [
            "Secure Document Upload & Storage",
            "Document Categorization",
            "Role-Based Access Control (RBAC)",
            "Document Expiration Alerts (e.g., for work permits)",
        ],
        featureGroups: [
            {
                groupName: "Secure Upload & Categorization",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can upload documents (PDF, DOCX, JPG) and categorize them.",
                    },
                    {
                        role: "Employee",
                        story: "I can upload documents requested by HR.",
                    },
                ],
            },
            {
                groupName: "Role-Based Access Control (RBAC)",
                stories: [
                    {
                        role: "HR Admin",
                        story: "I can set permissions for each document category.",
                    },
                    {
                        role: "Manager",
                        story:
                            "I can view the documents of my direct reports that HR has granted me access to.",
                    },
                    {
                        role: "Employee",
                        story:
                            "I can only access documents within my own personal vault.",
                    },
                ],
            },
        ],
        icon: "shield",
        category: "functional",
    },
    {
        slug: "leave-management",
        moduleNumber: 3,
        title: "Leave & Absence Management",
        shortTitle: "Leave Management",
        objective:
            "To streamline and automate the entire leave request and approval process.",
        description:
            "Customizable leave policies, automated accruals, multi-step approval workflows, shared team calendars, and real-time leave balance reporting.",
        features: [
            "Customizable Leave Policies & Types",
            "Automated Leave Accrual",
            "Multi-Step Approval Workflow",
            "Shared Team Calendar",
            "Leave Balance Reporting",
        ],
        featureGroups: [
            {
                groupName: "Leave Policy Configuration",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can configure different leave types and set the annual entitlement.",
                    },
                ],
            },
            {
                groupName: "Request & Approval Workflow",
                stories: [
                    {
                        role: "Employee",
                        story:
                            "I can submit a leave request and view my remaining balance.",
                    },
                    {
                        role: "Manager",
                        story:
                            "I will receive a notification for a new leave request and can approve or reject it.",
                    },
                    {
                        role: "HR Admin",
                        story: "I can override or approve any leave request.",
                    },
                ],
            },
            {
                groupName: "Shared Calendar View",
                stories: [
                    {
                        role: "Manager",
                        story:
                            "I can see a calendar view of my team's approved absences.",
                    },
                    {
                        role: "Employee",
                        story:
                            "I can see a calendar showing the absences of my immediate team members.",
                    },
                ],
            },
        ],
        icon: "calendar",
        category: "functional",
    },
    {
        slug: "employee-self-service",
        moduleNumber: 4,
        title: "Employee Self-Service (ESS) Portal",
        shortTitle: "Self-Service Portal",
        objective:
            "To empower employees with direct access to their HR information, reducing administrative overhead.",
        description:
            "Personalized dashboards, profile management with approval workflows, payslip access, company directory, and visual organization charts.",
        features: [
            "Personalized Dashboard",
            "Profile Information Management (with approval)",
            "Payslip Access & History",
            "Company Directory",
            "Visual Organization Chart",
        ],
        featureGroups: [
            {
                groupName: "Personal Dashboard",
                stories: [
                    {
                        role: "Employee",
                        story:
                            "I can see a dashboard with my upcoming leave, pending requests, and recent payslips.",
                    },
                ],
            },
            {
                groupName: "Profile Updates",
                stories: [
                    {
                        role: "Employee",
                        story:
                            "I can submit a request to update my personal information, which goes to HR for approval.",
                    },
                ],
            },
            {
                groupName: "Payslip Access",
                stories: [
                    {
                        role: "HR Admin",
                        story: "I can upload monthly payslips.",
                    },
                    {
                        role: "Employee",
                        story:
                            "I can view and download my payslips from my personal dashboard.",
                    },
                ],
            },
            {
                groupName: "Company Directory & Org Chart",
                stories: [
                    {
                        role: "Employee",
                        story:
                            "I can view a company directory and a visual organization chart.",
                    },
                ],
            },
        ],
        icon: "layout",
        category: "functional",
    },
    {
        slug: "performance-management",
        moduleNumber: 5,
        title: "Performance Management",
        shortTitle: "Performance",
        objective:
            "To structure and track employee performance through goals and reviews.",
        description:
            "Goal setting & tracking with OKRs/KPIs, cascading goals from company to individual, performance review cycles, and self-assessment forms.",
        features: [
            "Goal Setting & Tracking (OKRs/KPIs)",
            "Cascading Goals (Company → Team → Individual)",
            "Performance Review Cycle Management",
            "360-Degree Feedback (Optional)",
            "Self-Assessment Forms",
        ],
        featureGroups: [
            {
                groupName: "Goal Setting",
                stories: [
                    {
                        role: "Manager",
                        story: "I can set and assign goals for my direct reports.",
                    },
                    {
                        role: "Employee",
                        story: "I can view my goals and track my progress.",
                    },
                ],
            },
            {
                groupName: "Performance Reviews",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can create and schedule performance review cycles.",
                    },
                    {
                        role: "Manager",
                        story: "I can complete review forms for my team.",
                    },
                    {
                        role: "Employee",
                        story: "I can provide a self-assessment.",
                    },
                ],
            },
        ],
        icon: "chart",
        category: "functional",
    },
    {
        slug: "expense-management",
        moduleNumber: 6,
        title: "Expense Management",
        shortTitle: "Expenses",
        objective:
            "To simplify the process of submitting, approving, and tracking employee expenses.",
        description:
            "Streamlined expense claim submission with digital receipt upload, customizable expense categories, and multi-level approval workflows with analytics.",
        features: [
            "Expense Claim Submission",
            "Digital Receipt Upload (OCR is a future goal)",
            "Customizable Expense Categories",
            "Multi-Level Approval Workflow",
            "Expense Reporting & Analytics",
        ],
        featureGroups: [
            {
                groupName: "Expense Submission",
                stories: [
                    {
                        role: "Employee",
                        story:
                            "I can submit an expense claim, attach a digital receipt, and assign it to a category.",
                    },
                ],
            },
            {
                groupName: "Approval Workflow",
                stories: [
                    {
                        role: "Manager",
                        story:
                            "I can review, approve, or reject expense claims submitted by my team.",
                    },
                ],
            },
        ],
        icon: "receipt",
        category: "functional",
    },
    {
        slug: "payroll-management",
        moduleNumber: 7,
        title: "Payroll Management",
        shortTitle: "Payroll",
        objective:
            "To automate payroll processing, including salary calculations, deductions, and payslip generation.",
        description:
            "Automated payroll runs with salary structure configuration, tax and deduction management, payslip generation, distribution, and compliance reporting.",
        features: [
            "Salary Structure Configuration",
            "Automated Payroll Run",
            "Tax and Deduction Management",
            "Payslip Generation and Distribution",
            "Payroll Reporting and Compliance",
        ],
        featureGroups: [
            {
                groupName: "Salary Configuration",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can configure salary components (basic salary, allowances, deductions).",
                    },
                ],
            },
            {
                groupName: "Payroll Run",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can run monthly payroll, which automatically calculates net salary based on attendance, leaves, and deductions, and generate compliance reports.",
                    },
                ],
            },
            {
                groupName: "Payslip Generation",
                stories: [
                    {
                        role: "System",
                        story:
                            "Payslips are automatically generated, distributed, and uploaded to each employee's secure vault.",
                    },
                ],
            },
        ],
        icon: "dollar",
        category: "functional",
    },
    {
        slug: "admin-module",
        moduleNumber: 8,
        title: "Admin Module (For Client Company)",
        shortTitle: "Admin Panel",
        objective:
            "To provide the client's HR/Admin team with the tools to manage their company's instance of the platform.",
        description:
            "User & role management, company profile customization, workflow & template customization, data import/export tools, and audit logs.",
        features: [
            "User & Role Management",
            "Company Profile Customization (logo, departments, holidays)",
            "Workflow & Template Customization",
            "Data Import/Export Tools",
            "Audit Logs",
        ],
        featureGroups: [
            {
                groupName: "User Management",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can invite new employees, assign roles, and deactivate users.",
                    },
                ],
            },
            {
                groupName: "Company Settings",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can customize the platform with our company logo, define departments, and set company-wide holidays.",
                    },
                ],
            },
            {
                groupName: "Workflow Customization",
                stories: [
                    {
                        role: "HR Admin",
                        story:
                            "I can customize approval workflows and edit email notification templates.",
                    },
                ],
            },
        ],
        icon: "settings",
        category: "platform",
    },
    {
        slug: "super-admin",
        moduleNumber: 9,
        title: "Super Admin Module (For Socle RH)",
        shortTitle: "Super Admin",
        objective:
            "To give Socle RH complete control over the SaaS platform, its clients, and subscriptions.",
        description:
            "Client account management, subscription plan & billing integration, platform-wide analytics, feature flagging per plan, and system announcements.",
        features: [
            "Client Account Management (Onboarding, Suspension)",
            "Subscription Plan & Billing Integration (e.g., Stripe)",
            "Platform-Wide Analytics & Health Monitoring",
            "Feature Flagging / Module Management per Plan",
            "System Announcements",
        ],
        featureGroups: [
            {
                groupName: "Client Management",
                stories: [
                    {
                        role: "Super Admin",
                        story:
                            "I can create a new, isolated instance for a new client company.",
                    },
                ],
            },
            {
                groupName: "Subscription & Billing",
                stories: [
                    {
                        role: "Super Admin",
                        story:
                            "I can manage client subscription plans and view payment status.",
                    },
                ],
            },
            {
                groupName: "Platform Analytics",
                stories: [
                    {
                        role: "Super Admin",
                        story:
                            "I can view a dashboard with platform-wide metrics (active clients, total users, revenue).",
                    },
                ],
            },
            {
                groupName: "Feature Flagging",
                stories: [
                    {
                        role: "Super Admin",
                        story:
                            "I can enable or disable specific modules for a given client based on their subscription plan.",
                    },
                ],
            },
        ],
        icon: "server",
        category: "platform",
    },
];

export function getModuleBySlug(slug: string): Module | undefined {
    return modules.find((m) => m.slug === slug);
}

export function getFunctionalModules(): Module[] {
    return modules.filter((m) => m.category === "functional");
}

export function getPlatformModules(): Module[] {
    return modules.filter((m) => m.category === "platform");
}

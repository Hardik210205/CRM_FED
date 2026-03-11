export const mockLeads = [
  { id: 1, name: "Jordan Smith", email: "jordan.smith@example.com", company: "TechCorp", source: "Real Estate Portal", status: "New Lead", dateAdded: "Oct 24, 2023 10:45 AM", assignedTo: "Rohan Gupta" },
  { id: 2, name: "Maya Williams", email: "m.williams@webmail.com", company: "InnoTech", source: "Facebook Ads", status: "Contacted", dateAdded: "Oct 24, 2023 09:12 AM", assignedTo: "Sarah Jenkins" },
  { id: 3, name: "David Lee", email: "d.lee@corp.co", company: "GlobalCo", source: "Direct Website", status: "Qualified", dateAdded: "Oct 23, 2023 04:30 PM", assignedTo: "Rohan Gupta" },
  { id: 4, name: "Sarah Chen", email: "s.chen@design.io", company: "DesignHub", source: "Real Estate Portal", status: "Lost", dateAdded: "Oct 23, 2023 02:15 PM", assignedTo: "Mark R." },
  { id: 5, name: "Alex Rivera", email: "a.rivera@startup.com", company: "StartupXYZ", source: "LinkedIn", status: "New Lead", dateAdded: "Oct 22, 2023 11:00 AM", assignedTo: "Rohan Gupta" },
];

export const mockClients = [
  { id: 1, name: "Global Corp", contactPerson: "John Smith", portal: "B2B Portal", contractStart: "Jan 2023", contractEnd: "Dec 2024", status: "Active", meetings: 12 },
  { id: 2, name: "InnoTech Solutions", contactPerson: "Sarah Jenkins", portal: "Direct Sales", contractStart: "Mar 2023", contractEnd: "Mar 2025", status: "Active", meetings: 8 },
  { id: 3, name: "DesignHub Inc", contactPerson: "Maya Williams", portal: "Affiliates", contractStart: "Jun 2023", contractEnd: "Jun 2024", status: "Expiring", meetings: 5 },
  { id: 4, name: "StartupXYZ", contactPerson: "David Lee", portal: "B2B Portal", contractStart: "Sep 2023", contractEnd: "Sep 2025", status: "Active", meetings: 3 },
];

export const mockEmployees = [
  { id: 1, name: "Rohan Gupta", email: "rohan@keshavencon.com", designation: "Sales Executive", department: "Sales", status: "Active", leads: 42, clients: 156 },
  { id: 2, name: "Sarah Jenkins", email: "sarah@keshavencon.com", designation: "Account Manager", department: "Sales", status: "Active", leads: 35, clients: 120 },
  { id: 3, name: "Mark R.", email: "mark@keshavencon.com", designation: "Senior Analyst", department: "Analytics", status: "Active", leads: 28, clients: 85 },
  { id: 4, name: "Alex Rivera", email: "alex@keshavencon.com", designation: "Super Admin", department: "Admin", status: "Active", leads: 0, clients: 0 },
];

export const mockMeetings = [
  { id: 1, time: "09:00 AM", person: "John Smith", initials: "JS", topic: "Project Kickoff", status: "Confirmed", date: "Oct 24, 2023" },
  { id: 2, time: "11:30 AM", person: "Sarah Jenkins", initials: "SJ", topic: "Quarterly Review", status: "Pending", date: "Oct 24, 2023" },
  { id: 3, time: "03:00 PM", person: "Tech Solutions", initials: "TS", topic: "Contract Renewal", status: "Confirmed", date: "Oct 24, 2023" },
  { id: 4, time: "04:45 PM", person: "Mark R.", initials: "MR", topic: "Feedback Session", status: "Draft", date: "Oct 24, 2023" },
];

export const mockActivity = [
  { id: 1, type: "success", text: 'New Client "Global Corp" added', time: "2 hours ago by Sarah J." },
  { id: 2, type: "info", text: 'Contract renewed for "InnoTech"', time: "5 hours ago by Admin" },
  { id: 3, type: "warning", text: "Lead status changed to 'Cold'", time: "Yesterday at 6:45 PM" },
];

export const mockNotifications = [
  { id: 1, title: "New lead assigned", message: "Jordan Smith has been assigned to you", time: "2 min ago", read: false },
  { id: 2, title: "Meeting reminder", message: "Project Kickoff with John Smith at 09:00 AM", time: "30 min ago", read: false },
  { id: 3, title: "Contract expiring", message: "DesignHub Inc contract expires in 30 days", time: "1 hour ago", read: true },
];

export const departments = ["Sales", "Marketing", "Analytics", "Operations", "Admin", "HR"];

import { Step } from "@/types/chat";

export const initialData = {
  service: "",
  hasWebsite: "",
  websiteUrl: "",
  vehicleCount: "",
  finance: "",
  stock: "",
  aiAssistant: "",
  budget: "",
  name: "",
  dealership: "",
  email: "",
  phone: "",
};

export const questions: Record<Step, string> = {
  service: "What service do you need?",
  hasWebsite: "Do you already have a website?",
  websiteUrl: "Please enter your website URL.",
  vehicleCount: "How many vehicles do you list?",
  finance: "Do you need a finance calculator?",
  stock: "Do you need stock management integration?",
  aiAssistant: "Do you need an AI lead assistant?",
  budget: "What’s your approximate budget?",
  name: "What’s your full name?",
  dealership: "What’s your dealership name?",
  email: "What’s your email address?",
  phone: "What’s your WhatsApp number?",
  complete: "",
};

export const stepOptions = {
  service: [
    "New Dealership Website",
    "Website Redesign",
    "AI Sales Assistant",
    "Website Audit",
    "Pricing Enquiry",
  ],
  hasWebsite: ["Yes", "No"],
  vehicleCount: ["Under 50", "50–200", "200–500", "500+"],
  finance: ["Yes", "No"],
  stock: ["Yes", "No"],
  aiAssistant: ["Yes", "No"],
  budget: [
    "Under £500",
    "£500–£1500",
    "£1500–£3000",
    "£3000+",
  ],
};
export type Sender = "ai" | "user";

export type Message = {
  sender: Sender;
  text: string;
};

export type Step =
  | "service"
  | "hasWebsite"
  | "websiteUrl"
  | "vehicleCount"
  | "finance"
  | "stock"
  | "aiAssistant"
  | "budget"
  | "name"
  | "dealership"
  | "email"
  | "phone"
  | "complete";

export type FormData = {
  service: string;
  hasWebsite: string;
  websiteUrl: string;
  vehicleCount: string;
  finance: string;
  stock: string;
  aiAssistant: string;
  budget: string;
  name: string;
  dealership: string;
  email: string;
  phone: string;
};
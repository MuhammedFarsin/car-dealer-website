import { FormData } from "@/types/chat";

export const sendToWhatsApp = (formData: FormData) => {
  const message = `
New Brandwox Website Enquiry

Service: ${formData.service}
Existing Website: ${formData.hasWebsite}
Website URL: ${formData.websiteUrl || "N/A"}
Vehicle Stock: ${formData.vehicleCount}
Finance Calculator: ${formData.finance}
Stock Integration: ${formData.stock}
AI Assistant: ${formData.aiAssistant}
Budget: ${formData.budget}

Name: ${formData.name}
Dealership: ${formData.dealership}
Email: ${formData.email}
WhatsApp: ${formData.phone}
`;

  const encoded = encodeURIComponent(message);

  window.open(
    `https://wa.me/919207509746?text=${encoded}`,
    "_blank"
  );
};
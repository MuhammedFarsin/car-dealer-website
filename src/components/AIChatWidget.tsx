import React, { useMemo, useState } from "react";
import { initialData, questions, stepOptions } from "@/data/chatFlow";
import { sendToWhatsApp } from "@/utils/whatsapp";
import { FormData, Message, Step } from "@/types/chat";

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("service");
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState<FormData>(initialData);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hi 👋 Welcome to Brandwox. Let’s understand what kind of dealership website solution you need.",
    },
  ]);

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);
  };

  const askNextQuestion = (nextStep: Step) => {
    if (nextStep !== "complete") {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: questions[nextStep],
        },
      ]);
    }

    setStep(nextStep);
  };

  const restartFlow = () => {
    setFormData(initialData);
    setInput("");
    setStep("service");

    setMessages([
      {
        sender: "ai",
        text: "Hi 👋 Welcome to Brandwox. Let’s understand what kind of dealership website solution you need.",
      },
    ]);
  };  const handleOptionSelect = (value: string) => {
    addUserMessage(value);

    switch (step) {
      case "service":
        setFormData((prev) => ({
          ...prev,
          service: value,
        }));
        askNextQuestion("hasWebsite");
        break;

      case "hasWebsite":
        setFormData((prev) => ({
          ...prev,
          hasWebsite: value,
        }));

        if (value === "Yes") {
          askNextQuestion("websiteUrl");
        } else {
          askNextQuestion("vehicleCount");
        }
        break;

      case "vehicleCount":
        setFormData((prev) => ({
          ...prev,
          vehicleCount: value,
        }));
        askNextQuestion("finance");
        break;

      case "finance":
        setFormData((prev) => ({
          ...prev,
          finance: value,
        }));
        askNextQuestion("stock");
        break;

      case "stock":
        setFormData((prev) => ({
          ...prev,
          stock: value,
        }));
        askNextQuestion("aiAssistant");
        break;

      case "aiAssistant":
        setFormData((prev) => ({
          ...prev,
          aiAssistant: value,
        }));
        askNextQuestion("budget");
        break;

      case "budget":
        setFormData((prev) => ({
          ...prev,
          budget: value,
        }));
        askNextQuestion("name");
        break;
    }
  };

  const handleTextSubmit = () => {
    if (!input.trim()) return;

    addUserMessage(input);

    switch (step) {
      case "websiteUrl":
        setFormData((prev) => ({
          ...prev,
          websiteUrl: input,
        }));
        askNextQuestion("vehicleCount");
        break;

      case "name":
        setFormData((prev) => ({
          ...prev,
          name: input,
        }));
        askNextQuestion("dealership");
        break;

      case "dealership":
        setFormData((prev) => ({
          ...prev,
          dealership: input,
        }));
        askNextQuestion("email");
        break;

      case "email":
        setFormData((prev) => ({
          ...prev,
          email: input,
        }));
        askNextQuestion("phone");
        break;

      case "phone":
        setFormData((prev) => ({
          ...prev,
          phone: input,
        }));

        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: "Perfect. Your enquiry is ready. Click below to send it to WhatsApp.",
          },
        ]);

        setStep("complete");
        break;
    }

    setInput("");
  };  const options = useMemo(() => {
    switch (step) {
      case "service":
        return stepOptions.service;

      case "hasWebsite":
        return stepOptions.hasWebsite;

      case "vehicleCount":
        return stepOptions.vehicleCount;

      case "finance":
        return stepOptions.finance;

      case "stock":
        return stepOptions.stock;

      case "aiAssistant":
        return stepOptions.aiAssistant;

      case "budget":
        return stepOptions.budget;

      default:
        return [];
    }
  }, [step]);

  const needsTextInput = [
    "websiteUrl",
    "name",
    "dealership",
    "email",
    "phone",
  ].includes(step);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: "#2563eb",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(37,99,235,0.25)",
        }}
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "95px",
            right: "24px",
            width: "400px",
            height: "620px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              padding: "18px",
              background: "#111827",
              color: "white",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "16px" }}>
              Brandwox Website Consultant
            </div>
            <div
              style={{
                fontSize: "13px",
                opacity: 0.8,
                marginTop: "4px",
              }}
            >
              Helping UK car dealers build better websites
            </div>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              background: "#f9fafb",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "80%",
                  padding: "12px 14px",
                  borderRadius:
                    msg.sender === "user"
                      ? "16px 16px 4px 16px"
                      : "16px 16px 16px 4px",
                  background:
                    msg.sender === "user" ? "#2563eb" : "white",
                  color: msg.sender === "user" ? "white" : "#111827",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {msg.text}
              </div>
            ))}            {step === "complete" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <button
                  onClick={() => sendToWhatsApp(formData)}
                  style={{
                    padding: "14px",
                    border: "none",
                    borderRadius: "12px",
                    background: "#22c55e",
                    color: "white",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Send to WhatsApp
                </button>

                <button
                  onClick={restartFlow}
                  style={{
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "12px",
                    background: "white",
                    color: "#111827",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Start Again
                </button>
              </div>
            )}
          </div>

          {step !== "complete" && options.length > 0 && (
            <div
              style={{
                padding: "16px",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                borderTop: "1px solid #e5e7eb",
                background: "white",
              }}
            >
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "999px",
                    border: "1px solid #dbeafe",
                    background: "#eff6ff",
                    color: "#2563eb",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}          {step !== "complete" && needsTextInput && (
            <div
              style={{
                padding: "16px",
                borderTop: "1px solid #e5e7eb",
                background: "white",
                display: "flex",
                gap: "10px",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleTextSubmit();
                  }
                }}
                placeholder="Type your answer..."
                style={{
                  flex: 1,
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  outline: "none",
                  fontSize: "14px",
                }}
              />

              <button
                onClick={handleTextSubmit}
                style={{
                  padding: "12px 18px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
import { useRef } from "react";
import { useForm } from "@formspree/react";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import toast, { Toaster } from "react-hot-toast";
import { SectionHeading } from "./SectionHeading";

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "#f7f2ff",
    "& fieldset": {
      borderColor: "#f9a66c",
    },
    "&:hover fieldset": {
      borderColor: "#ff6f59",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff6f59",
    },
    "&.Mui-disabled": {
      backgroundColor: "rgba(249, 166, 108, 0.08)",
      "& fieldset": {
        borderColor: "rgba(249, 166, 108, 0.4)",
      },
    },
    "&.Mui-disabled .MuiOutlinedInput-input": {
      color: "rgba(249, 166, 108, 0.6)",
      WebkitTextFillColor: "rgba(249, 166, 108, 0.6)",
    },
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "#9ba4ab",
    opacity: 0.7,
  },
  "& .MuiInputBase-input": {
    color: "#f7f2ff",
  },
  "& .MuiInputLabel-root": {
    color: "#9ba4ab",
    "&.Mui-focused": {
      color: "#ff6f59",
    },
    "&.Mui-disabled": {
      color: "rgba(249, 166, 108, 0.5)",
    },
  },
};

const fields = [
  {
    label: "Name",
    name: "name",
    placeholder: "Your name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "your.email@example.com",
  },
  {
    label: "Message",
    name: "message",
    placeholder: "Tell me about your project...",
    multiline: true,
    rows: 4,
  },
];

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("mgopbjqd");
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = state.submitting;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await handleSubmit(e);
      toast.success("Message sent successfully! I will get back to you soon.");
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      toast.error(errorMessage);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <section
        className="mb-3 mt-7 rounded-3xl border border-white/10 bg-white/[0.035] p-[22px] shadow-[0_26px_70px_rgba(0,0,0,0.35)] max-[640px]:rounded-[18px]"
        id="contact"
      >
        <div className="mb-8">
          <SectionHeading
            className="mb-0"
            eyebrow="Contact"
            title="Have a project in mind?"
          />
          <p className="mt-3 text-sm text-[#9ba4ab]">
            Get in touch and let me know what you need. I'd love to hear about
            your project.
          </p>
        </div>

        <form onSubmit={onSubmit} ref={formRef}>
          <Box sx={{ display: "grid", gap: 2.5, width: "100%" }}>
            {fields.map((field) => (
              <TextField
                label={field.label}
                name={field.name}
                required
                fullWidth
                disabled={isSubmitting}
                variant="outlined"
                sx={textFieldSx}
                key={field.name}
                {...field}
              />
            ))}

            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              fullWidth
              endIcon={
                isSubmitting ? <CircularProgress size={20} /> : <SendIcon />
              }
              sx={{
                background:
                  "linear-gradient(to bottom right, #f9a66c, #ff6f59)",
                color: "#f8f5ff",
                fontWeight: "bold",
                textTransform: "none",
                padding: "12px 20px",
                fontSize: "1rem",
                borderRadius: "8px",
                boxShadow: "0 26px 70px rgba(0,0,0,0.35)",
                "&:hover": {
                  background:
                    "linear-gradient(to bottom right, #ff8a50, #ff5a45)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
                },
                "&:disabled": {
                  background:
                    "linear-gradient(to bottom right, #9ba4ab, #7a8290)",
                  color: "#f8f5ff",
                },
                transition: "all 0.2s ease",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </form>
      </section>
    </>
  );
};

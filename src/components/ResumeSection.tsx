import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { RESUME_URL, RESUME_TITLE } from "../content";

// Accepts a bare ID or the full share URL — extracts just the file ID either way
function parseDriveId(input: string): string {
  const match = input.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return match[1];
  return input.split(/[/?]/)[0];
}

const driveId = parseDriveId(RESUME_URL);
const embedUrl = `https://drive.google.com/file/d/${driveId}/preview`;
const viewUrl = `https://drive.google.com/file/d/${driveId}/view`;
const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;

export const ResumeSection = () => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(viewerRef, { once: true, amount: 0.05 });

  return (
    <motion.section
      className="mb-3 border-b border-white/10 py-[30px]"
      id="resume"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mb-6 flex items-start justify-between gap-4 max-[640px]:flex-col">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <SectionHeading
            className="mb-0"
            eyebrow="Resume"
            title={RESUME_TITLE}
          />
        </motion.div>

        <motion.div
          className="flex shrink-0 items-center gap-3 max-[640px]:w-full"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          <motion.a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-[0.86rem] font-semibold text-[#f7f2ff] transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.07] max-[640px]:flex-1 max-[640px]:justify-center"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <OpenInNewRoundedIcon sx={{ fontSize: 16 }} />
            View
          </motion.a>
          <motion.a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-[#f9a66c]/40 bg-[#f9a66c]/[0.08] px-4 py-2.5 text-[0.86rem] font-semibold text-[#f9a66c] transition-colors duration-200 hover:border-[#f9a66c]/70 hover:bg-[#f9a66c]/[0.15] max-[640px]:flex-1 max-[640px]:justify-center"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FileDownloadRoundedIcon sx={{ fontSize: 16 }} />
            Download
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        ref={viewerRef}
        className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] max-[640px]:rounded-[18px]"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
      >
        {isInView ? (
          <iframe
            src={embedUrl}
            title="Muhammad Hassan Bilal Resume"
            className="h-[800px] w-full max-[768px]:h-[560px] max-[480px]:h-[420px]"
            aria-label="Resume PDF viewer"
          />
        ) : (
          <div className="h-[800px] w-full max-[768px]:h-[560px] max-[480px]:h-[420px]" />
        )}
      </motion.div>
    </motion.section>
  );
};

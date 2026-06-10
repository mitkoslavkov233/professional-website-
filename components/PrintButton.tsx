"use client";

interface PrintButtonProps {
  className?: string;
}

export default function PrintButton({ className }: PrintButtonProps) {
  return (
    <button className={className} onClick={() => window.print()}>
      Save as PDF
    </button>
  );
}

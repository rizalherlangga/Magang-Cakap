import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function CardFragment({
  header, // Elemen untuk header (teks, gambar, atau ikon)
  content, // Elemen untuk konten utama (teks atau dll)
  footer, // Elemen untuk footer (harga, tombol, atau dll)
  className = "w-1/4 flex-shrink-0",
}) {
  return (
    <Card className={className}>
      <CardHeader>{header}</CardHeader>
      <CardContent>
        {typeof content === "string" ? <p>{content}</p> : content}
      </CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // Structured data only; the payload is generated from typed local content.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

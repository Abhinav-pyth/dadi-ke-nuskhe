import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="container-page py-24">
      <p className="font-serif text-5xl text-saffron-500">404</p>
      <h1 className="mt-4 font-serif text-3xl text-leaf-900">Page not found / पृष्ठ नहीं मिला</h1>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
        This page could not be found. Choose a language to continue.
        <br />
        यह पृष्ठ नहीं मिला। आगे बढ़ने के लिए भाषा चुनें।
      </p>
      <div className="mt-8 flex gap-3 text-sm font-semibold">
        <Link href="/hi" hrefLang="hi-IN" className="rounded-full bg-leaf-700 px-5 py-2.5 text-cream-50">
          हिंदी
        </Link>
        <Link href="/en" hrefLang="en-IN" className="rounded-full border border-leaf-700/25 px-5 py-2.5 text-leaf-800">
          English
        </Link>
      </div>
    </div>
  );
}

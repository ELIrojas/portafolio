import { useTranslation } from "react-i18next";

export default function Footer() {
   const{t}=useTranslation();
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center text-slate-400">
      <p>{t("footer.copyright")}</p>      </div>
    </footer>
  );
}
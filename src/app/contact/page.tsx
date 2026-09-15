import ContactPanel from "@/components/contact/ContactPanel";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Sidebar />

      <Topbar />

      <main className="ml-0 pt-20 lg:ml-64">
        <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          {/* Page Header */}
          

          {/* Contact Content */}
          <ContactPanel />
        </div>
      </main>
    </div>
  );
}
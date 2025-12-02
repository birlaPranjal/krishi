import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">AgriBegri</h1>
          <p className="text-gray-600">Your trusted agricultural marketplace</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

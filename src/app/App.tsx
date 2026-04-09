import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ProposalModalProvider } from "./components/ProposalModalContext";
import { HomePage } from "./pages/HomePage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ClientsPage } from "./pages/ClientsPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <ProposalModalProvider>
      <BrowserRouter>
        <div className="relative min-h-screen w-full bg-white text-gray-900 antialiased overflow-x-hidden">
          <Header />

          {/* Main Content */}
          <div className="relative w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/solucoes" element={<SolutionsPage />} />
              <Route path="/produto/:id" element={<ProductDetailPage />} />
              <Route path="/quem-somos" element={<AboutPage />} />
              <Route path="/clientes" element={<ClientsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contato" element={<ContactPage />} />
            </Routes>
            <Footer />
          </div>

          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </ProposalModalProvider>
  );
}

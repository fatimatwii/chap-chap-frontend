
import { useMemo, useState } from "react";
import {
  Search, ShoppingCart, MapPin, ChevronDown, ArrowRight, Clock3, Star,
  Plus, Minus, X, Home, Heart, UserRound, Bike,  Package,
} from "lucide-react";

const categories = [
  { id: "all", label: "All", emoji: "✨" },
  { id: "groceries", label: "Groceries", emoji: "🥬" },
  { id: "restaurants", label: "Restaurants", emoji: "🍲" },
  { id: "pharmacy", label: "Pharmacy", emoji: "💊" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
  { id: "bakery", label: "Bakery", emoji: "🥖" },
  { id: "electronics", label: "Electronics", emoji: "📱" },
];
const shops = [
  {
    id: 1,
    name: "The Local Market",
    category: "groceries",
    description: "Fresh fruits, vegetables, and essentials",
    emoji: "🥑",
    bg: "bg-lime-100",
    rating: 4.8,
    time: "20–35 min",
    fee: 500,
  },
  {
    id: 2,
    name: "Mama's Kitchen",
    category: "restaurants",
    description: "Homemade meals and local dishes",
    emoji: "🍲",
    bg: "bg-orange-100",
    rating: 4.9,
    time: "25–40 min",
    fee: 700,
  },
  {
    id: 3,
    name: "Central Pharmacy",
    category: "pharmacy",
    description: "Health and wellness products",
    emoji: "💊",
    bg: "bg-blue-100",
    rating: 4.7,
    time: "20–30 min",
    fee: 500,
  },
  {
    id: 4,
    name: "Coffee Break Bakery",
    category: "bakery",
    description: "Fresh bread and pastries",
    emoji: "🥐",
    bg: "bg-amber-100",
    rating: 4.6,
    time: "15–25 min",
    fee: 400,
  },
  {
    id: 5,
    name: "Fresh Express",
    category: "drinks",
    description: "Water, juice, and cold drinks",
    emoji: "🧃",
    bg: "bg-cyan-100",
    rating: 4.7,
    time: "15–30 min",
    fee: 500,
  },
  {
    id: 6,
    name: "Mobile Plus",
    category: "electronics",
    description: "Mobile phone accessories",
    emoji: "📱",
    bg: "bg-violet-100",
    rating: 4.5,
    time: "30–45 min",
    fee: 700,
  },

];
const products = [
  { id: 101, name: "Fresh Bananas", shop: "The Local Market", shopId: 1, price: 5, unit: "per bunch", emoji: "🍌", bg: "bg-yellow-50", category: "groceries", badge: "Popular" },
  { id: 102, name: "Grilled Chicken", shop: "Mama's Kitchen", shopId: 2, price: 3, unit: "per serving", emoji: "🍗", bg: "bg-orange-50", category: "restaurants", badge: "Customer Favorite" },
  { id: 103, name: "Mineral Water", shop: "Fresh Express", shopId: 5, price: 5, unit: "per bottle", emoji: "💧", bg: "bg-sky-50", category: "drinks", badge: "" },
  { id: 104, name: "Fresh Bread", shop: "Coffee Break Bakery", shopId: 4, price: 3, unit: "per loaf", emoji: "🥖", bg: "bg-amber-50", category: "bakery", badge: "Fresh Today" },
  { id: 105, name: "Vegetable Basket", shop: "The Local Market", shopId: 1, price: 5, unit: "per basket", emoji: "🥦", bg: "bg-green-50", category: "groceries", badge: "" },
  { id: 106, name: "Fruit Juice", shop: "Fresh Express", shopId: 5, price: 1, unit: "per bottle", emoji: "🧃", bg: "bg-pink-50", category: "drinks", badge: "" },
  { id: 107, name: "Homemade Donuts", shop: "Coffee Break Bakery", shopId: 4, price: 5, unit: "per serving", emoji: "🍩", bg: "bg-rose-50", category: "bakery", badge: "" },
  { id: 108, name: "Earphones", shop: "Mobile Plus", shopId: 6, price: 2, unit: "per pair", emoji: "🎧", bg: "bg-violet-50", category: "electronics", badge: "" },
];
const money = (amount) => `${amount.toLocaleString("fr-FR")} $`;

export default function CustomerHomePage() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Accueil");
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => products.filter((p) =>
    (category === "all" || p.category === category) &&
    `${p.name} ${p.shop}`.toLowerCase().includes(search.toLowerCase())
  ), [category, search]);

  const filteredShops = useMemo(() => shops.filter((s) =>
    (category === "all" || s.category === category) &&
    `${s.name} ${s.description}`.toLowerCase().includes(search.toLowerCase())
  ), [category, search]);

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const cartItems = products.filter((p) => cart[p.id] > 0);
  const subtotal = cartItems.reduce((sum, p) => sum + p.price * cart[p.id], 0);
  const deliveryFee = cartItems.length ? 5 : 0;

  function changeQty(id, delta) {
    setCart((old) => {
      const next = { ...old, [id]: Math.max(0, (old[id] || 0) + delta) };
      if (!next[id]) delete next[id];
      return next;
    });
  }

  function notify(message) {
    setNotice(message);
  }

  return (
    <div className="min-h-screen bg-[#f7f9f6] pb-24 text-slate-900 md:pb-8">
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[68px] items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-xl">🛵</div>
              <div className="min-w-0">
                <p className="truncate text-lg font-black tracking-tight">Chap Chap <span className="text-emerald-600">Moanda</span></p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Everything you need, delivered</p>
              </div>
            </div>
            <button onClick={() => setCartOpen(true)} aria-label="Ouvrir le panier" className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 hover:text-emerald-700">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-bold text-white">{cartCount}</span>}
            </button>
          </div>

          <button onClick={() => notify("Le choix du quartier sera bientôt disponible.")} className="mb-3 flex w-full items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-left sm:hidden">
            <MapPin size={17} className="text-emerald-600" />
            <span className="flex-1"><span className="block text-[10px] text-slate-400">Deliver to</span><span className="block text-sm font-bold">Moanda, Gabon</span></span>
            <ChevronDown size={17} />
          </button>

          <div className="hidden items-center justify-between gap-5 pb-3 sm:flex">
            <div className="flex items-center gap-2"><MapPin size={18} className="text-emerald-600" /><span className="text-sm font-bold">Moanda, Gabon</span></div>
            <SearchBox search={search} setSearch={setSearch} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="relative mt-4 overflow-hidden rounded-[26px] bg-emerald-800 sm:mt-6 sm:rounded-[30px]">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-emerald-900/45 to-emerald-700/10" />
          <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[35px] border-white/10 sm:right-12 sm:h-80 sm:w-80" />
          <div className="relative grid min-h-[250px] items-center px-5 py-7 sm:min-h-[270px] sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:px-12">
            <div className="relative z-10 max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-50"><Bike size={14} /> Local delivery</span>
              <h1 className="mt-4 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">Moanda, we'll deliver it <span className="text-lime-300">in a flash! </span></h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-emerald-50/90 sm:text-base">Groceries, favorite meals, and everyday essentials delivered to your door.</p>
              <button onClick={() => document.getElementById("shops")?.scrollIntoView({ behavior: "smooth" })} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-3 text-sm font-extrabold text-emerald-950 hover:bg-lime-200">Explore shops <ArrowRight size={17} /></button>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 flex h-40 w-36 items-center justify-center sm:right-5 sm:h-56 sm:w-48 md:static md:h-64 md:w-full">
              <div className="absolute h-32 w-32 rounded-full bg-lime-300/20 sm:h-48 sm:w-48" />
              <div className="relative text-[100px] drop-shadow-2xl sm:text-[145px] md:text-[165px]">🛵</div>
            </div>
          </div>
        </section>

        <div className="mt-5 sm:hidden"><SearchBox search={search} setSearch={setSearch} /></div>

        <section className="mt-7 sm:mt-9">
          <h2 className="mb-4 text-xl font-black tracking-tight sm:text-2xl">What are you looking for?</h2>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {categories.map((item) => (
              <button key={item.id} onClick={() => setCategory(item.id)} className={`flex min-w-[82px] shrink-0 flex-col items-center gap-2 rounded-2xl border px-3 py-3 transition sm:min-w-[105px] sm:px-4 sm:py-4 ${category === item.id ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-100" : "border-slate-100 bg-white"}`}>
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${item.id === "all" ? "bg-slate-100" : item.id === "groceries" ? "bg-green-100" : item.id === "restaurants" ? "bg-orange-100" : item.id === "pharmacy" ? "bg-blue-100" : item.id === "drinks" ? "bg-purple-100" : item.id === "bakery" ? "bg-amber-100" : "bg-pink-100"}`}>{item.emoji}</span>
                <span className="whitespace-nowrap text-xs font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="shops" className="mt-8 scroll-mt-36 sm:mt-10">
          <div className="mb-4 flex items-end justify-between gap-3"><h2 className="text-xl font-black tracking-tight sm:text-2xl">Shops near you</h2><button onClick={() => { setCategory("all"); setSearch(""); }} className="flex shrink-0 items-center gap-1 text-xs font-bold text-emerald-700">View all <ArrowRight size={15} /></button></div>
          {filteredShops.length ? <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {filteredShops.map((shop) => (
              <article key={shop.id} className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
                <div className={`flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-2xl text-4xl ${shop.bg}`}>{shop.emoji}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2"><h3 className="truncate text-sm font-extrabold sm:text-base">{shop.name}</h3><span className="flex shrink-0 items-center gap-1 text-xs font-bold"><Star size={13} className="fill-amber-400 text-amber-400" />{shop.rating}</span></div>
                  <p className="mt-1 truncate text-xs text-slate-500">{shop.description}</p>
                   <button onClick={() => { setCategory(shop.category); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-2 text-xs font-extrabold text-emerald-700">View products <ArrowRight size={12} className="ml-1 inline" /></button>
                </div>
              </article>
            ))}
          </div> : <EmptyState text="No shops found." />}
        </section>

        <section id="products" className="mt-8 scroll-mt-36 sm:mt-10">
          <div className="mb-4 flex items-end justify-between gap-3"><h2 className="text-xl font-black tracking-tight sm:text-2xl">{category === "all" ? "Popular products" : categories.find((c) => c.id === category)?.label}</h2><span className="text-xs text-slate-400">{filteredProducts.length} products</span></div>
          {filteredProducts.length ? <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article key={product.id} className="min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className={`relative flex aspect-[1.12/1] items-center justify-center ${product.bg}`}>
                  <span className="text-6xl sm:text-7xl">{product.emoji}</span>
                  {product.badge && <span className="absolute left-2 top-2 max-w-[85%] truncate rounded-full bg-white/90 px-2 py-1 text-[9px] font-extrabold text-emerald-800 sm:text-[10px]">{product.badge}</span>}
                  <button onClick={() => notify("Favorites will be available soon.")} aria-label="Ajouter aux favoris" className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-500 hover:text-rose-500"><Heart size={16} /></button>
                </div>
                <div className="p-3 sm:p-4"><p className="truncate text-[10px] font-semibold text-slate-400 sm:text-xs">{product.shop}</p><h3 className="mt-1 min-h-9 text-sm font-extrabold leading-5 sm:text-base">{product.name}</h3><p className="mt-1 text-[10px] text-slate-400 sm:text-xs">{product.unit}</p>
                  <div className="mt-3 flex items-center justify-between gap-1"><span className="text-xs font-black sm:text-sm">{money(product.price)}</span><button onClick={() => { changeQty(product.id, 1); notify(`${product.name} 
added to cart.`); }} aria-label={`Ajouter ${product.name}`} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"><Plus size={18} /></button></div>
                  {cart[product.id] > 0 && <p className="mt-2 text-[11px] font-bold text-emerald-700">{cart[product.id]} 
in the cart</p>}
                </div>
              </article>
            ))}
          </div> : <EmptyState text="No products found. Try another search or category." />}
        </section>

      

        <footer className="mt-8 hidden justify-between border-t border-slate-200 py-6 text-xs text-slate-400 md:flex"><span>© {new Date().getFullYear()} Chap Chap Moanda</span></footer>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-around">
          {[
  { label: "Home", icon: Home },
  { label: "Shops", icon: Package },
  { label: "Cart", icon: ShoppingCart },
  { label: "Favorites", icon: Heart },
  { label: "Profile", icon: UserRound },
].map(({ label, icon: Icon }) => (
            <button key={label} onClick={() => {
              setActiveTab(label);
             if (label === "Cart") {
  setCartOpen(true);
} else if (label === "Shops") {
  document.getElementById("shops")?.scrollIntoView({ behavior: "smooth" });
} else if (label === "Home") {
  window.scrollTo({ top: 0, behavior: "smooth" });
} else {
  notify(
    label === "Favorites"
      ? "Favorites will be available soon."
      : "Your profile will be available soon."
  );
}  }} className={`relative flex flex-col items-center gap-1 px-2 py-1 text-[10px] font-bold ${activeTab === label ? "text-emerald-700" : "text-slate-400"}`}>
              <span className="relative"><Icon size={21} />{label === "Panier" && cartCount > 0 && <span className="absolute -right-2 -top-1 rounded-full bg-rose-500 px-1 text-[9px] text-white">{cartCount}</span>}</span>{label}
            </button>
          ))}
        </div>
      </nav>

      {notice && <div role="status" className="fixed bottom-24 left-1/2 z-[60] flex w-[calc(100%-32px)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-xl md:bottom-6"><span className="flex-1">{notice}</span><button onClick={() => setNotice("")} aria-label="Fermer"><X size={16} /></button></div>}

      {cartOpen && <div className="fixed inset-0 z-50">
        <button aria-label="Fermer le panier" onClick={() => setCartOpen(false)} className="absolute inset-0 bg-slate-950/45" />
        <aside role="dialog" aria-modal="true" aria-label="Your Cart" className="absolute inset-x-0 bottom-0 flex max-h-[88dvh] flex-col rounded-t-3xl bg-white shadow-2xl sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-full sm:max-w-md sm:rounded-l-3xl">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><div><h2 className="text-xl font-black">Your Cart</h2><p className="mt-1 text-xs text-slate-400">{cartCount} item(s)</p></div><button onClick={() => setCartOpen(false)} aria-label="Fermer" className="rounded-xl bg-slate-100 p-2"><X size={19} /></button></div>
          {cartItems.length ? <>
            <div className="flex-1 space-y-3 overflow-y-auto p-5">{cartItems.map((p) => <div key={p.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3"><div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl ${p.bg}`}>{p.emoji}</div><div className="min-w-0 flex-1"><h3 className="truncate text-sm font-extrabold">{p.name}</h3><p className="mt-1 text-xs font-bold text-emerald-700">{money(p.price)}</p><p className="text-[10px] text-slate-400">{p.shop}</p></div><div className="flex items-center gap-2"><button onClick={() => changeQty(p.id, -1)} aria-label="Diminuer" className="rounded-lg border p-2"><Minus size={13} /></button><span className="text-sm font-bold">{cart[p.id]}</span><button onClick={() => changeQty(p.id, 1)} aria-label="Augmenter" className="rounded-lg bg-emerald-600 p-2 text-white"><Plus size={13} /></button></div></div>)}</div>
            <div className="border-t border-slate-100 p-5"><div className="space-y-2 text-sm"><div className="flex justify-between text-slate-500"><span>Subtotal</span><span>{money(subtotal)}</span></div><div className="flex justify-between text-slate-500"><span>Estimated delivery</span><span>{money(deliveryFee)}</span></div><div className="flex justify-between border-t pt-3 text-base font-black"><span>Estimated total</span><span>{money(subtotal + deliveryFee)}</span></div></div><button onClick={() => notify("")} className="mt-4 w-full rounded-xl bg-emerald-700 px-4 py-3.5 text-sm font-extrabold text-white">Proceed to checkout <ArrowRight size={17} className="ml-1 inline" /></button></div>
          </> : <div className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center"><div className="rounded-full bg-emerald-50 p-6 text-emerald-700"><ShoppingCart size={32} /></div><h3 className="mt-5 text-lg font-black">Your cart is empty</h3><p className="mt-2 text-sm text-slate-500">Add your favorite products to see them here.</p><button onClick={() => setCartOpen(false)} className="mt-5 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white">Explore products</button></div>}
        </aside>
      </div>}
    </div>
  );
}

function SearchBox({ search, setSearch }) {
  return <label className="relative block w-full sm:max-w-xl"><Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a meal, product, or shop..." className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" /></label>;
}

function EmptyState({ text }) {
  return <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-5 py-10 text-center"><Search className="mx-auto text-slate-300" size={28} /><p className="mt-3 text-sm text-slate-500">{text}</p></div>;
}

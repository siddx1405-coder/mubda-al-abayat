import { useEffect, useMemo, useState } from "react"

type Language = "ar" | "en"

type Product = {
  id: number
  image: string
  price: number
  ar: string
  en: string
}

const products: Product[] = [
  {
    id: 1,
    image: "/images/abaya-1.png",
    price: 450,
    ar: "عباية لمسة التوت",
    en: "Mulberry Detail Abaya",
  },
  {
    id: 2,
    image: "/images/abaya-2.png",
    price: 350,
    ar: "عباية تطريز وردي",
    en: "Blush Embroidered Abaya",
  },
  {
    id: 3,
    image: "/images/abaya-3.png",
    price: 350,
    ar: "عباية زهور بنفسجية",
    en: "Violet Garden Abaya",
  },
  {
    id: 4,
    image: "/images/abaya-4.png",
    price: 380,
    ar: "عباية حديقة مزهرة",
    en: "Floral Garden Abaya",
  },
  {
    id: 5,
    image: "/images/abaya-5.png",
    price: 380,
    ar: "عباية كريستال الزهور",
    en: "Crystal Bloom Abaya",
  },
  {
    id: 6,
    image: "/images/abaya-6.png",
    price: 400,
    ar: "عباية ليل كحلي",
    en: "Midnight Navy Abaya",
  },
  {
    id: 7,
    image: "/images/abaya-7.png",
    price: 400,
    ar: "عباية مخمل ودانتيل",
    en: "Velvet Lace Abaya",
  },
  {
    id: 8,
    image: "/images/abaya-8.png",
    price: 320,
    ar: "عباية دانتيل أزرق",
    en: "Blue Lace Abaya",
  },
]

const copy = {
  ar: {
    nav: ["الرئيسية", "التشكيلة", "من نحن", "تواصل معنا"],
    heroEyebrow: "أناقة تعبّر عنك",
    heroTitle: "عبايات صُمّمت\nلحضورٍ لا يُنسى",
    heroBody:
      "تشكيلة منتقاة من العبايات النسائية بتفاصيل راقية، أقمشة فاخرة ولمسات تناسب كل مناسبة.",
    shop: "تسوّقي التشكيلة",
    visit: "زورينا في المتجر",
    range: "+500",
    rangeLabel: "قطعة بتصاميم متنوعة",
    collectionEyebrow: "مختاراتنا",
    collectionTitle: "عبايات بتفاصيل استثنائية",
    collectionBody:
      "اكتشفي مجموعة من تصاميمنا المتوفرة. للمقاسات والتفاصيل، تواصلي معنا مباشرة عبر واتساب.",
    currency: "ر.ق",
    add: "أضيفي للسلة",
    added: "تمت الإضافة",
    aboutEyebrow: "مبدعة العبايات",
    aboutTitle: "أناقة أصيلة، بلمسة عصرية",
    aboutBody:
      "في مبدعة العبايات نؤمن أن كل عباية تحكي قصة. نقدم تشكيلة واسعة تتجاوز 500 قطعة، تجمع بين الحرفية الراقية والتفاصيل المميزة لتجدي ما يشبهك.",
    quality: "جودة مختارة",
    qualityText: "أقمشة مريحة وتفاصيل دقيقة",
    variety: "تشكيلة واسعة",
    varietyText: "خيارات لكل ذوق ومناسبة",
    locationEyebrow: "نحن بانتظارك",
    locationTitle: "زورينا واكتشفي التشكيلة",
    directions: "افتحي الموقع في خرائط Google",
    call: "اتصلي بنا",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    cr: "س.ت: 78727",
    cart: "سلة التسوق",
    empty: "سلتك فارغة حالياً",
    emptyText: "أضيفي التصاميم التي أعجبتك ثم أرسلي طلبك عبر واتساب.",
    subtotal: "الإجمالي",
    order: "إرسال الطلب عبر واتساب",
    close: "إغلاق",
    remove: "حذف",
    item: "قطعة",
    footerText: "عبايات نسائية بتصاميم راقية وتفاصيل تعبّر عنك.",
    rights: "جميع الحقوق محفوظة",
  },
  en: {
    nav: ["Home", "Collection", "About", "Contact"],
    heroEyebrow: "Elegance that speaks for you",
    heroTitle: "Abayas designed\nfor an unforgettable presence",
    heroBody:
      "A curated collection of ladies’ abayas with refined details, premium fabrics, and distinctive touches for every occasion.",
    shop: "Shop the collection",
    visit: "Visit our boutique",
    range: "500+",
    rangeLabel: "pieces across our collection",
    collectionEyebrow: "Our selection",
    collectionTitle: "Abayas with exceptional detail",
    collectionBody:
      "Explore a selection of our available designs. For sizing and details, speak with us directly on WhatsApp.",
    currency: "QAR",
    add: "Add to cart",
    added: "Added",
    aboutEyebrow: "Mubda Al Abayat",
    aboutTitle: "Timeless elegance, a modern touch",
    aboutBody:
      "At Mubda Al Abayat, we believe every abaya tells a story. Our range of more than 500 pieces blends fine craftsmanship and beautiful detail so you can find a style that feels like you.",
    quality: "Curated quality",
    qualityText: "Comfortable fabrics and fine details",
    variety: "Extensive range",
    varietyText: "A style for every taste and occasion",
    locationEyebrow: "We look forward to seeing you",
    locationTitle: "Visit us and discover the collection",
    directions: "Open in Google Maps",
    call: "Call us",
    whatsapp: "WhatsApp",
    email: "Email",
    cr: "CR No. 78727",
    cart: "Your cart",
    empty: "Your cart is empty",
    emptyText:
      "Add your favourite designs, then send your order to us on WhatsApp.",
    subtotal: "Subtotal",
    order: "Send order on WhatsApp",
    close: "Close",
    remove: "Remove",
    item: "item",
    footerText:
      "Ladies’ abayas with refined designs and details that express you.",
    rights: "All rights reserved",
  },
}

const mapUrl =
  "https://www.google.com/maps/place/25%C2%B015%2707.5%22N+51%C2%B027%2713.6%22E/@25.2520859,51.4512109,788m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d25.2520859!4d51.4537858?hl=en&entry=ttu"
const whatsappNumber = "97459997020"

function Icon({
  name,
  size = 20,
}: {
  name: "bag" | "arrow" | "whatsapp" | "pin" | "phone" | "mail" | "close" | "minus" | "plus" | "sparkle"
  size?: number
}) {
  const paths = {
    bag: (
      <>
        <path d="M6 8h12l-1 12H7L6 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M8.2 8.1c.3 4.1 3.5 7 7.5 7.7" />
        <path d="m8.4 8 1.5-.4.9 2-1 1M15.8 15.6l.5-1.5-2-1-1 1" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1-1.2 2c-4.2-1.8-8-5.6-9.8-9.8L8 7 7 3Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    minus: <path d="M5 12h14" />,
    plus: (
      <>
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </>
    ),
    sparkle: (
      <>
        <path d="M12 2c.8 5 2.8 7 8 8-5.2 1-7.2 3-8 8-.8-5-2.8-7-8-8 5.2-1 7.2-3 8-8Z" />
        <path d="M19 17c.3 1.8 1 2.5 3 3-2 .5-2.7 1.2-3 3-.3-1.8-1-2.5-3-3 2-.5 2.7-1.2 3-3Z" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

export default function App() {
  const [lang, setLang] = useState<Language>("ar")
  const [cart, setCart] = useState<Record<number, number>>({})
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [justAdded, setJustAdded] = useState<number | null>(null)
  const t = copy[lang]
  const isArabic = lang === "ar"
  const displayPhoneNumber = isArabic ? "٩٧٤ ٥٩٩٩ ٧٠٢٠" : "974 5999 7020"
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0)
  const total = useMemo(
    () =>
      products.reduce(
        (sum, product) => sum + product.price * (cart[product.id] || 0),
        0,
      ),
    [cart],
  )

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isArabic ? "rtl" : "ltr"
    document.title = isArabic
      ? "مبدعة العبايات | عبايات نسائية في قطر"
      : "Mubda Al Abayat | Ladies Abayas in Qatar"
  }, [lang, isArabic])

  const addToCart = (id: number) => {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }))
    setJustAdded(id)
    window.setTimeout(() => setJustAdded(null), 1200)
  }

  const updateQuantity = (id: number, change: number) => {
    setCart((current) => {
      const next = (current[id] || 0) + change
      if (next <= 0) {
        const { [id]: _, ...rest } = current
        return rest
      }
      return { ...current, [id]: next }
    })
  }

  const sendOrder = () => {
    const lines = products
      .filter((product) => cart[product.id])
      .map(
        (product) =>
          `• ${
            isArabic ? product.ar : product.en
          } × ${cart[product.id]} — ${product.price * cart[product.id]} QAR`,
      )
    const intro = isArabic
      ? "مرحباً مبدعة العبايات، أود طلب:"
      : "Hello Mubda Al Abayat, I would like to order:"
    const totalLine = isArabic
      ? `الإجمالي: ${total} ر.ق`
      : `Total: ${total} QAR`
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`${intro}\n\n${lines.join("\n")}\n\n${totalLine}`)}`,
      "_blank",
    )
  }

  const navTargets = ["home", "collection", "about", "contact"]

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f4ee] text-[#151513]">
      <div className="bg-[#1b1b18] px-5 py-2.5 text-center text-[11px] tracking-[.16em] text-[#ddd4c3] sm:text-xs">
        <span>{t.cr}</span>
        <span className="mx-3 text-[#8c806c]">•</span>
        <span>
          {isArabic
            ? "تشكيلة تتجاوز 500 قطعة"
            : "A collection of over 500 pieces"}
        </span>
      </div>

      <header className="absolute inset-x-0 z-30 border-b border-white/15 text-white">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-12">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label={isArabic ? "الرئيسية" : "Home"}
          >
            <span className="grid h-10 w-10 place-items-center border border-[#cfb987] text-lg font-semibold text-[#ddc995] transition-colors group-hover:bg-[#ddc995] group-hover:text-black">
              M
            </span>
            <span>
              <strong className="block text-[15px] font-semibold tracking-[.14em]">
                MUBDA AL ABAYAT
              </strong>
              <small className="block text-[10px] tracking-[.22em] text-white/55">
                مبدعة العبايات
              </small>
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={`#${navTargets[index]}`}
                className="text-sm text-white/80 transition-colors hover:text-[#e6d19e]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(isArabic ? "en" : "ar")}
              className="h-10 rounded-full border border-white/20 px-3.5 text-xs font-semibold tracking-wide transition hover:border-white/60"
              aria-label="Switch language"
            >
              {isArabic ? "EN" : "عربي"}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:border-white/60"
              aria-label={t.cart}
            >
              <Icon name="bag" size={18} />
              {cartCount > 0 && (
                <span className="absolute -end-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#c7a75e] px-1 text-[10px] font-bold text-black">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 lg:hidden"
              aria-label="Menu"
            >
              <span className="h-px w-4 bg-white" />
              <span className="h-px w-4 bg-white" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#171714]/95 px-6 py-5 backdrop-blur lg:hidden">
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={`#${navTargets[index]}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-3 text-sm text-white/80 last:border-0"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative min-h-[760px] bg-[#1b1b18] text-white"
        >
          <img
            src="/images/hero-interior.png"
            alt={
              isArabic
                ? "متجر مبدعة العبايات من الداخل"
                : "Inside Mubda Al Abayat boutique"
            }
            className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          />
          <div className="hero-shade absolute inset-0" />
          <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-20 pt-36 sm:px-8 lg:items-center lg:px-12 lg:pb-0">
            <div className="max-w-2xl animate-rise">
              <p className="eyebrow text-[#ead8aa]">{t.heroEyebrow}</p>
              <h1 className="mt-5 whitespace-pre-line text-5xl font-medium leading-[1.15] sm:text-6xl lg:text-[76px] lg:leading-[1.08]">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                {t.heroBody}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#collection" className="gold-button">
                  {t.shop}
                  <Icon name="arrow" size={18} />
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-button"
                >
                  <Icon name="pin" size={18} />
                  {t.visit}
                </a>
              </div>
            </div>
            <div className="absolute bottom-5 end-5 hidden items-center gap-4 border-s border-white/30 ps-5 text-start sm:flex lg:bottom-12 lg:end-12">
              <strong className="text-4xl font-normal text-[#e1c98e]">
                {t.range}
              </strong>
              <span className="max-w-24 text-xs leading-5 text-white/60">
                {t.rangeLabel}
              </span>
            </div>
          </div>
        </section>

        <section
          id="collection"
          className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-16">
              <div>
                <p className="eyebrow text-[#8c7138]">{t.collectionEyebrow}</p>
                <h2 className="section-title mt-3">{t.collectionTitle}</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#6c6a63] sm:text-base">
                {t.collectionBody}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4">
              {products.map((product, index) => (
                <article key={product.id} className="product-card group">
                  <div className="relative aspect-[.72] overflow-hidden bg-[#e8e3da]">
                    <img
                      src={product.image}
                      alt={isArabic ? product.ar : product.en}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                      loading={index > 3 ? "lazy" : "eager"}
                    />
                    <span className="absolute start-3 top-3 bg-[#f7f4ee]/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.15em] text-[#575147] backdrop-blur sm:start-4 sm:top-4 sm:text-[10px]">
                      {isArabic ? "تصميم مميز" : "Signature"}
                    </span>
                  </div>
                  <div className="pt-4">
                    <h3 className="min-h-10 text-sm font-semibold leading-5 sm:text-base">
                      {isArabic ? product.ar : product.en}
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <p className="text-base font-semibold text-[#846a34] sm:text-lg">
                        {product.price}{" "}
                        <span className="text-[11px] font-medium">
                          {t.currency}
                        </span>
                      </p>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="flex items-center gap-1.5 border-b border-[#25251f] pb-1 text-[11px] font-semibold transition hover:text-[#9a7a3b] sm:text-xs"
                      >
                        <Icon
                          name={justAdded === product.id ? "sparkle" : "bag"}
                          size={15}
                        />
                        <span className="hidden sm:inline">
                          {justAdded === product.id ? t.added : t.add}
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-[#1d1d1a] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
            <div className="relative">
              <img
                src="/images/storefront.png"
                alt={
                  isArabic
                    ? "واجهة متجر مبدعة العبايات"
                    : "Mubda Al Abayat storefront"
                }
                className="aspect-[1.45] w-full object-cover"
              />
              <div className="absolute -bottom-5 end-4 bg-[#cfb675] px-6 py-5 text-[#171713] sm:end-8 sm:px-8">
                <strong className="block text-3xl font-medium">500+</strong>
                <span className="text-xs">
                  {isArabic ? "قطعة في المتجر" : "pieces in store"}
                </span>
              </div>
            </div>
            <div className="pt-5 lg:pt-0">
              <p className="eyebrow text-[#d9c183]">{t.aboutEyebrow}</p>
              <h2 className="section-title mt-4 max-w-xl text-white">
                {t.aboutTitle}
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
                {t.aboutBody}
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="border-t border-white/20 pt-5">
                  <strong className="block text-sm font-semibold text-[#dec98f]">
                    {t.quality}
                  </strong>
                  <span className="mt-2 block text-xs leading-5 text-white/50">
                    {t.qualityText}
                  </span>
                </div>
                <div className="border-t border-white/20 pt-5">
                  <strong className="block text-sm font-semibold text-[#dec98f]">
                    {t.variety}
                  </strong>
                  <span className="mt-2 block text-xs leading-5 text-white/50">
                    {t.varietyText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 text-center">
              <p className="eyebrow text-[#8c7138]">{t.locationEyebrow}</p>
              <h2 className="section-title mt-3">{t.locationTitle}</h2>
            </div>
            <div className="grid overflow-hidden bg-[#e9e4da] lg:grid-cols-[1.15fr_.85fr]">
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="map-panel group relative min-h-[400px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#d8d1c4]" />
                <div className="map-lines absolute inset-0 opacity-65" />
                <span className="absolute left-[52%] top-[47%] grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#1e1e1b] text-[#e0c987] shadow-2xl transition-transform group-hover:scale-110">
                  <Icon name="pin" size={28} />
                </span>
                <span className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap bg-white px-5 py-3 text-xs font-semibold shadow-xl">
                  {t.directions}
                  <Icon name="arrow" size={16} />
                </span>
              </a>
              <div className="flex flex-col justify-center bg-[#d7c08a] p-7 sm:p-12 lg:p-16">
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#51452f]">
                  MUBDA AL ABAYAT
                </p>
                <h3 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
                  {isArabic ? "تواصلي معنا" : "Get in touch"}
                </h3>
                <div className="mt-8 divide-y divide-black/15 border-y border-black/15">
                  <a href={`tel:+${whatsappNumber}`} className="contact-link">
                    <Icon name="phone" />
                    <span>
                      <small>{t.call}</small>
                      <b dir="ltr" className="block font-medium">
                        {displayPhoneNumber}
                      </b>
                    </span>
                    <Icon name="arrow" size={17} />
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <Icon name="whatsapp" />
                    <span>
                      <small>{t.whatsapp}</small>
                      <b dir="ltr" className="block font-medium">
                        {displayPhoneNumber}
                      </b>
                    </span>
                    <Icon name="arrow" size={17} />
                  </a>
                  <a
                    href="mailto:mubdaalabaya@gmail.com"
                    className="contact-link"
                  >
                    <Icon name="mail" />
                    <span className="min-w-0">
                      <small>{t.email}</small>
                      <b className="block truncate font-medium">
                        mubdaalabaya@gmail.com
                      </b>
                    </span>
                    <Icon name="arrow" size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#151512] px-5 pb-6 pt-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 sm:flex-row">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center border border-[#cfb987] text-xl font-semibold text-[#ddc995]">
                  M
                </span>
                <div>
                  <strong className="block tracking-[.12em]">
                    MUBDA AL ABAYAT
                  </strong>
                  <small className="text-white/45">مبدعة العبايات</small>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/45">
                {t.footerText}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div>
                <strong className="mb-4 block text-xs uppercase tracking-wider text-[#d7c183]">
                  {isArabic ? "روابط" : "Explore"}
                </strong>
                {t.nav.map((item, index) => (
                  <a
                    key={item}
                    href={`#${navTargets[index]}`}
                    className="mb-2 block text-white/55 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div>
                <strong className="mb-4 block text-xs uppercase tracking-wider text-[#d7c183]">
                  {isArabic ? "تواصل" : "Contact"}
                </strong>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="mb-2 block text-white/55 hover:text-white"
                >
                  WhatsApp
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2 block text-white/55 hover:text-white"
                >
                  Google Maps
                </a>
                <span className="block text-white/55">{t.cr}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 pt-6 text-[11px] text-white/35 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Mubda Al Abayat. {t.rights}.
            </span>
            <span>
              Made by{" "}
              <a
                href="https://www.xenosysweb.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 transition hover:text-[#d7c183]"
              >
                @Xenosys Qatar
              </a>{" "}
              ·{" "}
              <a
                href="tel:+97470643918"
                className="text-white/70 transition hover:text-[#d7c183]"
              >
                +974 7064 3918
              </a>
            </span>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 end-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#236c4c] text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#1d5b40]"
        aria-label={t.whatsapp}
      >
        <Icon name="whatsapp" size={26} />
      </a>

      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <button
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
            aria-label={t.close}
          />
          <aside className="absolute inset-y-0 end-0 flex w-full max-w-md flex-col bg-[#f7f4ee] shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 sm:px-7">
              <div className="flex items-center gap-3">
                <Icon name="bag" />
                <h2 className="text-xl font-semibold">{t.cart}</h2>
                <span className="rounded-full bg-[#d5be85] px-2 py-0.5 text-xs">
                  {cartCount}
                </span>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 hover:bg-black/5"
                aria-label={t.close}
              >
                <Icon name="close" />
              </button>
            </div>
            {cartCount === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#e9e3d8] text-[#8d7542]">
                  <Icon name="bag" size={30} />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{t.empty}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[#706d66]">
                  {t.emptyText}
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-7 border-b border-black pb-1 text-sm font-semibold"
                >
                  {t.shop}
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-7">
                  {products
                    .filter((product) => cart[product.id])
                    .map((product) => (
                      <div
                        key={product.id}
                        className="flex gap-4 border-b border-black/10 py-4"
                      >
                        <img
                          src={product.image}
                          alt=""
                          className="h-28 w-20 object-cover"
                        />
                        <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                          <div>
                            <h3 className="truncate text-sm font-semibold">
                              {isArabic ? product.ar : product.en}
                            </h3>
                            <p className="mt-1 text-sm text-[#8a7039]">
                              {product.price} {t.currency}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-black/15">
                              <button
                                onClick={() => updateQuantity(product.id, -1)}
                                className="grid h-8 w-8 place-items-center"
                                aria-label="Decrease"
                              >
                                <Icon name="minus" size={14} />
                              </button>
                              <span className="w-7 text-center text-xs">
                                {cart[product.id]}
                              </span>
                              <button
                                onClick={() => updateQuantity(product.id, 1)}
                                className="grid h-8 w-8 place-items-center"
                                aria-label="Increase"
                              >
                                <Icon name="plus" size={14} />
                              </button>
                            </div>
                            <button
                              onClick={() =>
                                updateQuantity(product.id, -cart[product.id])
                              }
                              className="text-[11px] text-[#817d74] underline"
                            >
                              {t.remove}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="border-t border-black/10 bg-white px-5 py-6 sm:px-7">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm text-[#69665f]">{t.subtotal}</span>
                    <strong className="text-xl">
                      {total} <small className="text-xs">{t.currency}</small>
                    </strong>
                  </div>
                  <button
                    onClick={sendOrder}
                    className="flex h-14 w-full items-center justify-center gap-2 bg-[#1f6849] text-sm font-semibold text-white transition hover:bg-[#18523a]"
                  >
                    <Icon name="whatsapp" />
                    {t.order}
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  )
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`pb-24`}>
      {/* navbar */}
      <div className="">
        <div className="flex justify-between items-center w-[85%] mx-auto py-4">
          <Image src="/logo.png" width={180} height={40} />

          <div className="flex items-center gap-5">
            <Link href="/category" className="text-sm opacity-80">
              kategori
            </Link>
            <Link href="/profile">
              <Image src="/avatar.png" width={40} height={0} />
            </Link>
          </div>
        </div>
      </div>

      {/* jumbotron */}
      <div className="relative bg-[url('/jumbotron.jpg')] w-[95%] md:w-[85%] mx-auto mt-12 rounded-lg p-12">
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-75 rounded-lg"></div>
        <h1 className="relative text-white text-center text-3xl md:text-4xl font-semibold">Revolusi pembelajaran:Temukan <br /> Ilmu Baru melalui Platform Video <br /> Interaktif!</h1>
        <p className="relative text-xs text-center text-white mt-4">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, <br className="hidden md:block" /> Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
        </p>
        <button className="relative block mx-auto mt-4 text-center text-sm py-3 px-8 bg-[#3ECF4C] text-white font-medium rounded-xl">
          Temukan Video Course Untuk Dipelajari!
        </button>
      </div>

      {/* lisvideo pembelajaran */}
      <div className="w-[95%] md:w-[85%] mx-auto mt-14">
        <h1 className="text-2xl font-semibold">Koleksi Video <br className="sm:hidden" /> Pembelajaran Unggulan</h1>
        <p className="text-xs mt-1 font-medium text-gray-500">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>

        {/* kategori */}
        <div className="flex gap-5 md:gap-4 text-xs md:text-sm mt-8 font-medium">
          <p className="cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition-all duration-300">Semua kelas</p>
          <p className="cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition-all duration-300">Pemasaran</p>
          <p className="cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition-all duration-300">Desain</p>
          <p className="cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition-all duration-300">Pengembangan Diri</p>
          <p className="cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition-all duration-300">Bisnis</p>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="p-3 border-2 rounded-lg">
            <Image className="rounded-lg mx-auto" src="/jumbotron.jpg" width={400} height={0} />
            <h1 className="font-semibold mt-2 w-[90%] mx-auto">Big 4 Auditor Financial Analyst</h1>
            <p className="text-xs font-medium text-gray-400 mt-2 w-[90%] mx-auto">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, </p>

            <div className="mt-4 flex gap-2 w-[90%] mx-auto">
              <Image src="/avatar.png" width={35} height={0} />
              <div>
                <h2 className="text-sm font-semibold">Jenna ortega</h2>
                <p className="text-xs text-gray-400">Senior Accountant di <span className="font-semibold">Gojek</span></p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center w-[90%] mx-auto">
              <div className="flex gap-2">
                <Image src="/rating.png" width={80} height={0} />
                <p className="text-xs">3.5(86)</p>
              </div>

              <h2 className="text-lg md:text-xl font-medium">Rp 300K</h2>
            </div>
          </div>

          <div className="p-3 border-2 rounded-lg">
            <Image className="rounded-lg mx-auto" src="/jumbotron.jpg" width={400} height={0} />
            <h1 className="font-semibold mt-2 w-[90%] mx-auto">Big 4 Auditor Financial Analyst</h1>
            <p className="text-xs font-medium text-gray-400 mt-2 w-[90%] mx-auto">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, </p>

            <div className="mt-4 flex gap-2 w-[90%] mx-auto">
              <Image src="/avatar.png" width={35} height={0} />
              <div>
                <h2 className="text-sm font-semibold">Jenna ortega</h2>
                <p className="text-xs text-gray-400">Senior Accountant di <span className="font-semibold">Gojek</span></p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center w-[90%] mx-auto">
              <div className="flex gap-2">
                <Image src="/rating.png" width={80} height={0} />
                <p className="text-xs">3.5(86)</p>
              </div>

              <h2 className="text-lg md:text-xl font-medium">Rp 300K</h2>
            </div>
          </div>

          <div className="p-3 border-2 rounded-lg">
            <Image className="rounded-lg mx-auto" src="/jumbotron.jpg" width={400} height={0} />
            <h1 className="font-semibold mt-2 w-[90%] mx-auto">Big 4 Auditor Financial Analyst</h1>
            <p className="text-xs font-medium text-gray-400 mt-2 w-[90%] mx-auto">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, </p>

            <div className="mt-4 flex gap-2 w-[90%] mx-auto">
              <Image src="/avatar.png" width={35} height={0} />
              <div>
                <h2 className="text-sm font-semibold">Jenna ortega</h2>
                <p className="text-xs text-gray-400">Senior Accountant di <span className="font-semibold">Gojek</span></p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center w-[90%] mx-auto">
              <div className="flex gap-2">
                <Image src="/rating.png" width={80} height={0} />
                <p className="text-xs">3.5(86)</p>
              </div>

              <h2 className="text-lg md:text-xl font-medium">Rp 300K</h2>
            </div>
          </div>

          <div className="p-3 border-2 rounded-lg">
            <Image className="rounded-lg mx-auto" src="/jumbotron.jpg" width={400} height={0} />
            <h1 className="font-semibold mt-2 w-[90%] mx-auto">Big 4 Auditor Financial Analyst</h1>
            <p className="text-xs font-medium text-gray-400 mt-2 w-[90%] mx-auto">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, </p>

            <div className="mt-4 flex gap-2 w-[90%] mx-auto">
              <Image src="/avatar.png" width={35} height={0} />
              <div>
                <h2 className="text-sm font-semibold">Jenna ortega</h2>
                <p className="text-xs text-gray-400">Senior Accountant di <span className="font-semibold">Gojek</span></p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center w-[90%] mx-auto">
              <div className="flex gap-2">
                <Image src="/rating.png" width={80} height={0} />
                <p className="text-xs">3.5(86)</p>
              </div>

              <h2 className="text-lg md:text-xl font-medium">Rp 300K</h2>
            </div>
          </div>

          <div className="p-3 border-2 rounded-lg">
            <Image className="rounded-lg mx-auto" src="/jumbotron.jpg" width={400} height={0} />
            <h1 className="font-semibold mt-2 w-[90%] mx-auto">Big 4 Auditor Financial Analyst</h1>
            <p className="text-xs font-medium text-gray-400 mt-2 w-[90%] mx-auto">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, </p>

            <div className="mt-4 flex gap-2 w-[90%] mx-auto">
              <Image src="/avatar.png" width={35} height={0} />
              <div>
                <h2 className="text-sm font-semibold">Jenna ortega</h2>
                <p className="text-xs text-gray-400">Senior Accountant di <span className="font-semibold">Gojek</span></p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center w-[90%] mx-auto">
              <div className="flex gap-2">
                <Image src="/rating.png" width={80} height={0} />
                <p className="text-xs">3.5(86)</p>
              </div>

              <h2
              
              className="text-lg md:text-xl font-medium">Rp 300K</h2>
            </div>

          </div>

          <div className="p-3 border-2 rounded-lg">
            <Image className="rounded-lg mx-auto" src="/jumbotron.jpg" width={400} height={0} />
            <h1 className="font-semibold mt-2 w-[90%] mx-auto">Big 4 Auditor Financial Analyst</h1>
            <p className="text-xs font-medium text-gray-400 mt-2 w-[90%] mx-auto">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, </p>

            <div className="mt-4 flex gap-2 w-[90%] mx-auto">
              <Image src="/avatar.png" width={35} height={0} />
              <div>
                <h2 className="text-sm font-semibold">Jenna ortega</h2>
                <p className="text-xs text-gray-400">Senior Accountant di <span className="font-semibold">Gojek</span></p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center w-[90%] mx-auto">
              <div className="flex gap-2">
                <Image src="/rating.png" width={80} height={0} />
                <p className="text-xs">3.5(86)</p>
              </div>

              <h2 className="text-lg md:text-xl font-medium">Rp 300K</h2>
            </div>
          </div>
        </div>
      </div>

      {/* banner CTA */}
      <div className="relative w-[95%] md:w-[85%] py-8 mx-auto mt-14 bg-[url('/jumbotron.jpg')] rounded-xl">
        <div className="absolute inset-0 bg-black opacity-75 rounded-lg"></div>
        <p className="relative text-slate-300 text-center text-sm">NEWSLETTER</p>
        <h1 className="relative text-white text-center text-3xl font-semibold mt-1">Mau Belajar Lebih Banyak?</h1>
        <p className="relative text-xs text-center mt-2 text-white w-[60%] mx-auto">Daftarkan dirimu untuk mendapatkan informasi terbaru dan <br /> penawaran spesial dari program-program terbaik hariesok.id</p>

        {/* button */}
        <div className="w-[90%] mx-auto text-center mt-8 relative flex justify-center flex-col gap-3 sm:flex-row sm:gap-0">
          <input 
            type="text" 
            placeholder="Masukkan Emailmu"
            className="bg-white px-8 py-4 text-sm sm:border-8 border-white outline-none rounded-l-none sm:rounded-l-lg"
          />
          <button className="py-4 px-6 bg-[#FFBD3A] text-white sm:border-8 border-white text-sm font-semibold rounded-r-none sm:rounded-r-lg">Subscribe</button>
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-between w-[95%] md:w-[85%] mx-auto mt-14">
        <div>
          <Image src="/logo.png" width={200} height={0} />
          <h2 className="font-medium text-sm">Gali Potensi Anda Melalui Pembelajaran <br /> Video di hariesok.id!</h2>
          <p className="text-sm mt-2 opacity-75">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p className="text-sm mt-2 opacity-75">+62-877-7123-1234</p>
        </div>

        <div className="text-sm text-gray-500 hidden lg:flex gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-black font-medium">Kategori</h3>
            <p>Digital & Teknologi</p>
            <p>Pemasaran</p>
            <p>Manajemen Bisnis</p>
            <p>Pengembangan Diri</p>
            <p>Desain</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-black font-medium">Perusahaan</h3>
            <p>Tentang Kami</p>
            <p>FAQ</p>
            <p>Kebiijakan Privasi</p>
            <p>Ketentuan Layanan</p>
            <p>Bantuan</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-black font-medium">Komunitas</h3>
            <p>Tips Sukses</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
      <hr className="w-[95%] md:w-[85%] border-black mt-12 mx-auto" />
      <div className="flex flex-col sm:flex-row justify-between w-[95%] md:w-[85%] mx-auto mt-8">
        <h3 className="font-medium order-2 mt-4 sm:mt-0 sm:order-1 text-gray-500 text-sm">@2023 Gerobak Sayur All Rights Reserved</h3>

        <Image className="order-1 sm:order-2" src="/social-media.jpg" width={180} height={0} />
      </div>
    </div>
  );
}

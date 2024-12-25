import Link from "next/link"
import Image from "next/image"

const Register = () => {
    return (
        <div className="mt-14 w-[95%] md:w-[75%] lg:w-[50%] border mx-auto p-8 rounded-lg">
            <h1 className="text-center text-2xl font-semibold">Pendaftaran Akun</h1>
            <p className="text-center text-xs md:text-sm mt-1 text-gray-500">Yuk, Daftarkan akunmu sekarang juga!</p>

            <div className="mt-6 flex flex-col gap-6">
                <div className="flex flex-col">
                    <label className="text-sm text-gray-500">Nama lengkap</label>
                    <input 
                        type="text" 
                        placeholder="Masukkan nama lengkap" 
                        className="p-3 mt-1 rounded-md text-sm border"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-500">E-mail</label>
                    <input 
                        type="email" 
                        placeholder="Masukkan email" 
                        className="p-3 mt-1 rounded-md text-sm border"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-500">E-mail</label>
                    <div className="flex items-center gap-4">
                        <div>
                            <p>+62</p>
                        </div>

                        <input 
                            type="number" 
                            placeholder="Masukkan no hp" 
                            className="p-3 mt-1 rounded-md text-sm border w-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-500">Kata sandi</label>
                    <input 
                        type="password" 
                        placeholder="Masukkan kata sandi" 
                        className="p-3 mt-1 rounded-md text-sm border"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-500">Konfirmasi kata sandi</label>
                    <input 
                        type="password" 
                        placeholder="Masukkan kata sandi" 
                        className="p-3 mt-1 rounded-md text-sm border"
                    />
                </div>
                <Link className="text-right text-xs md:text-sm font-medium text-gray-500" href="/">Lupa password?</Link>

                <div className="flex flex-col gap-2">
                    <button className="text-white bg-[#3ECF4C] font-medium text-xs md:text-sm mt-1 py-3 rounded-md">Daftar</button>
                    <button className="text-[#3ECF4C] bg-[#E2FCD9CC] font-medium text-xs md:text-sm py-3 rounded-md">Masuk</button>
                </div>
                <p className="text-center text-xs">atau</p>
                <button className="flex justify-center items-center gap-2 text-slate-800 font-medium text-xs md:text-sm py-3 rounded-md">
                    <Image src="/google-icon.png" width={20} height={0} />
                    Masuk dengan Google
                </button>
            </div>
        </div>
    )
}

export default Register
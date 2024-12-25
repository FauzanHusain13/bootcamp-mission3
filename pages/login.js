import Link from "next/link"
import Image from "next/image"

const Login = () => {
    return (
        <>
        {/* navbar */}
        <div className="">
            <div className="flex justify-between items-center w-[85%] mx-auto py-4">
            <Image src="/logo.png" width={180} height={40} />
            </div>
        </div>
        <div className="mt-14 w-[95%] md:w-[75%] lg:w-[50%] border mx-auto p-8 rounded-lg">
            <h1 className="text-center text-2xl font-semibold">Masuk ke Akun</h1>
            <p className="text-center text-xs md:text-sm mt-1 text-gray-500">Yuk, Lanjutin belajarmu di videobelajar</p>

            {/* form */}
            <div className="mt-6 flex flex-col gap-6">
                <div className="flex flex-col">
                    <label className="text-sm text-gray-500">E-Mail</label>
                    <input 
                        type="email" 
                        placeholder="Masukkan email" 
                        className="p-3 mt-1 rounded-md text-sm border"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-500">Password</label>
                    <input 
                        type="password" 
                        placeholder="Masukkan password" 
                        className="p-3 mt-1 rounded-md text-sm border"
                    />
                </div>
                <Link className="text-right text-xs md:text-sm font-medium text-gray-500" href="/">Lupa password?</Link>

                <div className="flex flex-col gap-2">
                    <button className="text-white bg-[#3ECF4C] font-medium text-xs md:text-sm mt-1 py-3 rounded-md">Masuk</button>
                    <button className="text-[#3ECF4C] bg-[#E2FCD9CC] font-medium text-xs md:text-sm py-3 rounded-md">Daftar</button>
                </div>
                <p className="text-center text-xs">atau</p>
                <button className="flex justify-center items-center gap-2 text-slate-800 font-medium text-xs md:text-sm py-3 rounded-md">
                    <Image src="/google-icon.png" width={20} height={0} />
                    Masuk dengan Google
                </button>
            </div>
        </div>     
        </>
    )
}

export default Login
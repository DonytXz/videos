"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import bg from "../../../../public/img/fondo_login_desktop.svg";
import { loginService } from "../../../services/Auth";
import { withBasePath } from "@/lib/basePath";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const postData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Ingresa tu correo y contraseña para continuar.");
      return;
    }

    setIsLoading(true);
    const response = await loginService({ username: email, password });
    setIsLoading(false);

    if (!response) {
      setError("No pudimos iniciar sesión. Revisa tus credenciales o explora la demo sin cuenta.");
      return;
    }

    localStorage.setItem("token", response.data?.token ?? "");
    localStorage.setItem("id", response.data?._id ?? "");
    router.push("/campaings");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0b0d] text-white">
      <div className="absolute inset-0 bg-center bg-no-repeat opacity-60" style={{ backgroundImage: `url(${bg.src})` }} />
      <nav className="landing-nav relative z-10">
        <Link href="/" className="flex items-center gap-3">
          <Image src={withBasePath("/img/logo-min.svg")} alt="" width={36} height={36} />
          <span className="text-xl font-semibold">Deepia</span>
        </Link>
        <Link href="/wizard/csv?mode=showcase" className="landing-button landing-button-small">Explorar demo</Link>
      </nav>
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-100px)] w-[min(1100px,calc(100%-40px))] items-center gap-16 py-12 lg:grid-cols-2">
        <div>
          <p className="landing-eyebrow">Tu espacio de trabajo</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">Continúa creando mensajes que hablan con cada prospecto.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/55">Accede a tus campañas, bases de datos y vistas previas guardadas.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/45 p-7 shadow-2xl backdrop-blur-xl md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight">Inicia sesión</h2>
          <p className="mt-2 text-sm text-white/45">Usa las credenciales asociadas a tu espacio Deepia.</p>
          <form onSubmit={postData} className="mt-8 flex flex-col gap-5">
            <label className="text-xs font-medium text-white/65">Correo electrónico
              <input value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#43D681]" placeholder="tu@empresa.com" type="email" autoComplete="email" />
            </label>
            <label className="text-xs font-medium text-white/65">Contraseña
              <input value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#43D681]" placeholder="••••••••" type="password" autoComplete="current-password" />
            </label>
            {error && <p className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-xs leading-5 text-red-100" role="alert">{error}</p>}
            <button disabled={isLoading} className="landing-button w-full disabled:cursor-wait disabled:opacity-60" type="submit">{isLoading ? "Verificando…" : "Ingresar a mi espacio"}</button>
          </form>
          <div className="my-7 flex items-center gap-4 text-[10px] uppercase tracking-[.16em] text-white/25"><span className="h-px flex-1 bg-white/10" />o recorre el producto<span className="h-px flex-1 bg-white/10" /></div>
          <Link href="/wizard/csv?mode=showcase" className="landing-button landing-button-secondary w-full">Ver showcase sin credenciales →</Link>
          <p className="mt-6 text-center text-xs text-white/40">¿Todavía no tienes cuenta? <Link href="/auth/register" className="font-semibold text-[#A0FFBF]">Crear una cuenta</Link></p>
        </div>
      </section>
    </main>
  );
}

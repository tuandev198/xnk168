'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();

  const handleChangeLang = (lang: string) => {
    router.push(`/${lang}`);
  };

  return (
    <div className="flex space-x-2 p-1 rounded">
      <button onClick={() => handleChangeLang('vi')}>
        <Image
          src="/images/vi.png"
          alt="Vietnamese"
          width={25}
          height={20}
          className="rounded shadow"
        />
      </button>
      <button onClick={() => handleChangeLang('en')}>
        <Image
          src="/images/en.png"
          alt="English"
          width={25}
          height={20}
          className="rounded shadow"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;

import Link from 'next/link';

import { getConfig } from '@/config';

export default function Home() {
  const config = getConfig();
  console.log(config.BASE_API);

  return (
    <div className="flex flex-col gap-3 min-h-screen p-24">
      <div className="font-medium text-lg">BASE_API: {config.BASE_API}</div>
      <div className="leading-normal flex flex-col">
        <div className="mb-2">页面列表</div>
        <Link href="/page1" className="no-underline hover:underline text-blue-600">
          Page1
        </Link>
        <Link href="/page2" className="no-underline hover:underline text-blue-600">
          Page2
        </Link>
      </div>
    </div>
  );
}

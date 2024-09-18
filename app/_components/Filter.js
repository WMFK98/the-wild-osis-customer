'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get('capacity') ?? 'all';

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        acitveFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        acitveFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        acitveFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        acitveFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, acitveFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`${
        filter === acitveFilter ? 'bg-primary-700 text-primary-50' : ''
      }   px-5 py-2 hover:bg-primary-700`}
    >
      {children}
    </button>
  );
}

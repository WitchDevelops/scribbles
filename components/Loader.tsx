import Image from "next/image";

export const Loader = () => {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        width={32}
        height={32}
        alt="loading..."
        className="animate-spin"
      />
      Loading...
    </div>
  );
};


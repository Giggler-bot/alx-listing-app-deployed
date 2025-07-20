const Pill = ({ label }: { label: string }) => (
  <button className="px-4 py-1 m-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">
    {label}
  </button>
);
export default Pill;

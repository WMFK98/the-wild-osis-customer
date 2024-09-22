function Spinner() {
  return (
    <div role="status" className="flex justify-center ">
      <div className="spinner"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;

const CotizeForm = () => {
  return (
    <div className="flex items-center justify-center p-12">
    <div className="mx-auto w-full max-w-[550px] bg-white">
        <form>
            <div className="mb-5">
                <label for="name" className="mb-3 block text-base font-medium text-gray-500">
                    NIT
                </label>
                <input type="text" name="name" id="name" placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label for="phone" className="mb-3 block text-base font-medium text-gray-500">
                  Razón Social
                </label>
                <input type="text" name="phone" id="phone" placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label for="email" className="mb-3 block text-base font-medium text-gray-500">
                    Correo Electrónico
                </label>
                <input type="email" name="email" id="email" placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div>
                <button
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Cotizar
                </button>
            </div>
        </form>
    </div>
</div>

  )}    

export default CotizeForm
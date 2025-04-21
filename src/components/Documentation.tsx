import React from 'react';
import Header from './Header';

const Documentation = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Documentation</h1>
              
              <div className="prose max-w-none">
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Maa Ganga RO</h2>
                  <p className="text-gray-600 mb-4">
                    Maa Ganga RO Water Suppliers is your trusted partner for pure and affordable drinking water delivery in Tigaon, IMT, and nearby areas.
                  </p>
                  <img 
                    src="https://github.com/MaaGangaROWaterSuppliers/maagangarowatersuppliers.github.io/blob/main/assets/maagangarowatersuppliers.jpg?raw=true"
                    alt="Maa Ganga RO Logo"
                    className="w-100 h-100 mb-6"
                  />
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Contact Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Phone:</strong> 9818552087 , 9990160746 </li>
                      <li><strong>Address:</strong> House No. 163/1, Near By New Anaj Mandi, Tigaon, Faridabad, HR 121101</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Regular Supply</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Daily delivery service</li>
                        <li>Weekly delivery plans</li>
                        <li>Flexible timing options</li>
                        <li>20L bottles at ₹20 each</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Special Services</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Bulk orders for events</li>
                        <li>Emergency delivery</li>
                        <li>Office water solutions</li>
                        <li>Custom delivery schedules</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Areas</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Main Areas</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Tigaon</li>
                          <li>IMT</li>
                          <li>Nearby Sectors</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Coverage</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Sector 58</li>
                          <li>Sector 59</li>
                          <li>Sector 60</li>
                          <li>Sector 61</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Hours</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Monday - Saturday:</span>
                        <span>8:00 AM - 8:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;
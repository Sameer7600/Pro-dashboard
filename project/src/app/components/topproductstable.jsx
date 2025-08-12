'use client';

import Image from 'next/image';

const products = [
  {
    name: 'Form Builder CP',
    icon: '/icons/form-builder.svg',
    creators: ['/avatars/1.jpg', '/avatars/2.jpg', '/avatars/3.jpg'],
    category: 'Subscription',
    impressions: '20,929',
    country: 'US',
    cr: '27.4%',
    value: '$12,499.77',
  },
  {
    name: 'Machine Learning A-Z',
    icon: '/icons/ml.svg',
    creators: ['/avatars/4.jpg', '/avatars/5.jpg', '/avatars/6.jpg'],
    category: 'Subscription',
    impressions: '17,944',
    country: 'GB',
    cr: '22.6%',
    value: '$4,227.09',
  },
  {
    name: '2024 Web Bootcamp',
    icon: '/icons/form-builder.svg',
    creators: ['/avatars/7.jpg'],
    category: 'Subscription',
    impressions: '16,097',
    country: 'FR',
    cr: '22.4%',
    value: '$2,499.77',
  },
  {
    name: 'Digital Marketing Course',
    icon: '/icons/marketing.svg',
    creators: ['/avatars/8.jpg', '/avatars/9.jpg', '/avatars/10.jpg'],
    category: 'Subscription',
    impressions: '12,996',
    country: 'IT',
    cr: '22.1%',
    value: '$2,224.09',
  },
  {
    name: 'Form Builder PRO',
    icon: '/icons/alert.svg',
    creators: ['/avatars/11.jpg', '/avatars/12.jpg'],
    category: 'Subscription',
    impressions: '7,097',
    country: 'DE',
    cr: '17.4%',
    value: '$1,949.72',
  },
];

const TopProductsTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Top Products</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="text-left text-gray-500 uppercase">
            <tr>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Created By</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Total Impressions</th>
              <th className="py-2 px-4">Top Country</th>
              <th className="py-2 px-4">CR</th>
              <th className="py-2 px-4">Value</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {products.map((product, i) => (
              <tr key={i} className="border-t">
                <td className="py-3 px-4 flex items-center gap-2">
                  <Image src={product.icon} alt="" width={24} height={24} />
                  <span className="font-medium">{product.name}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex -space-x-2">
                    {product.creators.map((avatar, index) => (
                      <Image
                        key={index}
                        src={avatar}
                        alt="creator"
                        width={28}
                        height={28}
                        className="rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500">{product.category}</td>
                <td className="py-3 px-4">{product.impressions}</td>
                <td className="py-3 px-4">{product.country}</td>
                <td className="py-3 px-4">{product.cr}</td>
                <td className="py-3 px-4 text-green-600 font-semibold">{product.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProductsTable;

import React from 'react';
import { Metadata } from 'next';
import { Ruler } from 'lucide-react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Indian Ethnic Wear Size Guide & Measurements',
  description:
    'Size charts and drape measurements for sarees, unstitched blouse pieces, kurtis, suit sets, and children’s ethnic clothing.',
  path: '/size-guide',
});

export default function SizeGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Size Guide' }]} />

      <div className="py-6 border-b border-[#DED5C8] mb-10">
        <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold flex items-center gap-1.5">
          <Ruler className="w-3.5 h-3.5 text-[#B08D57]" />
          Fitting Assistance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#252525] mt-1">
          Ethnic Wear Size & Measurement Guide
        </h1>
        <p className="text-xs sm:text-sm text-[#6F6A63] mt-2">
          Ensure the perfect fit for your celebratory wardrobe. All dimensions are stated in inches unless noted otherwise.
        </p>
      </div>

      <div className="space-y-12 text-xs sm:text-sm text-[#252525]">
        {/* Sarees & Blouses Section */}
        <section className="bg-white border border-[#DED5C8] p-6 sm:p-8 rounded-sm space-y-4">
          <h2 className="font-serif text-xl font-semibold text-[#6B1F2A]">
            1. Saree Dimensions & Blouse Pieces
          </h2>
          <p className="text-[#6F6A63] leading-relaxed">
            All sarees at Kalyani Sarees adhere to standard Indian handloom drape lengths:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#6F6A63]">
            <li>
              <strong>Saree Length:</strong> Standard 5.5 meters (adequate for all traditional and contemporary drapes).
            </li>
            <li>
              <strong>Running Blouse Piece:</strong> 0.8 meters unstitched fabric attached to the inner end of the saree.
            </li>
            <li>
              <strong>Fall & Pico:</strong> Complimentary high-quality cotton fall stitching and pico edging is applied to pure silk sarees.
            </li>
          </ul>
        </section>

        {/* Ladies Kurti & Suit Sets Size Chart */}
        <section className="bg-white border border-[#DED5C8] p-6 sm:p-8 rounded-sm space-y-4">
          <h2 className="font-serif text-xl font-semibold text-[#6B1F2A]">
            2. Ladies&apos; Ready-to-Wear Size Chart
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#DED5C8] text-center text-xs">
              <thead>
                <tr className="bg-[#EFE5D5]">
                  <th className="border border-[#DED5C8] p-3 font-semibold text-[#252525]">Size Tag</th>
                  <th className="border border-[#DED5C8] p-3 font-semibold text-[#252525]">Bust (Inches)</th>
                  <th className="border border-[#DED5C8] p-3 font-semibold text-[#252525]">Waist (Inches)</th>
                  <th className="border border-[#DED5C8] p-3 font-semibold text-[#252525]">Hip (Inches)</th>
                  <th className="border border-[#DED5C8] p-3 font-semibold text-[#252525]">Standard Indian Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DED5C8]">
                <tr>
                  <td className="p-3 font-bold text-[#6B1F2A]">S (36)</td>
                  <td className="p-3">36&quot;</td>
                  <td className="p-3">30&quot;</td>
                  <td className="p-3">38&quot;</td>
                  <td className="p-3 text-[#6F6A63]">Tailored fit</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="p-3 font-bold text-[#6B1F2A]">M (38)</td>
                  <td className="p-3">38&quot;</td>
                  <td className="p-3">32&quot;</td>
                  <td className="p-3">40&quot;</td>
                  <td className="p-3 text-[#6F6A63]">Regular festive fit</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#6B1F2A]">L (40)</td>
                  <td className="p-3">40&quot;</td>
                  <td className="p-3">34&quot;</td>
                  <td className="p-3">42&quot;</td>
                  <td className="p-3 text-[#6F6A63]">Classic fit</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="p-3 font-bold text-[#6B1F2A]">XL (42)</td>
                  <td className="p-3">42&quot;</td>
                  <td className="p-3">36&quot;</td>
                  <td className="p-3">44&quot;</td>
                  <td className="p-3 text-[#6F6A63]">Comfortable festive fit</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#6B1F2A]">XXL (44)</td>
                  <td className="p-3">44&quot;</td>
                  <td className="p-3">38&quot;</td>
                  <td className="p-3">46&quot;</td>
                  <td className="p-3 text-[#6F6A63]">Relaxed celebration fit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Children's Sizing */}
        <section className="bg-white border border-[#DED5C8] p-6 sm:p-8 rounded-sm space-y-4">
          <h2 className="font-serif text-xl font-semibold text-[#6B1F2A]">
            3. Kids&apos; Age & Height Guidelines
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#DED5C8] text-center text-xs">
              <thead>
                <tr className="bg-[#EFE5D5]">
                  <th className="border border-[#DED5C8] p-3 font-semibold text-[#252525]">Age Bracket</th>
                  <th className="border border-[#DED5C8] p-3 font-semibold text-[#252525]">Chest (Inches)</th>
                  <th className="border border-[#DED5C8] p-3 font-semibold text-[#252525]">Waist (Inches)</th>
                  <th className="border border-[#DED5C8] p-3 font-semibold text-[#252525]">Recommended Height</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DED5C8]">
                <tr>
                  <td className="p-3 font-semibold">2–3 Years</td>
                  <td className="p-3">22&quot;</td>
                  <td className="p-3">20&quot;</td>
                  <td className="p-3 text-[#6F6A63]">86–96 cm</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="p-3 font-semibold">4–5 Years</td>
                  <td className="p-3">24&quot;</td>
                  <td className="p-3">22&quot;</td>
                  <td className="p-3 text-[#6F6A63]">100–110 cm</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">6–7 Years</td>
                  <td className="p-3">26&quot;</td>
                  <td className="p-3">23&quot;</td>
                  <td className="p-3 text-[#6F6A63]">114–122 cm</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="p-3 font-semibold">8–9 Years</td>
                  <td className="p-3">28&quot;</td>
                  <td className="p-3">24&quot;</td>
                  <td className="p-3 text-[#6F6A63]">128–134 cm</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">10–12 Years</td>
                  <td className="p-3">30&quot;</td>
                  <td className="p-3">26&quot;</td>
                  <td className="p-3 text-[#6F6A63]">140–152 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

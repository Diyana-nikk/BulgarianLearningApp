import Link from "next/link";

const sections = [
  {
    title: "Ordering drinks & food",
    color: "bg-amber-50 border-amber-200",
    headerColor: "bg-amber-100",
    phrases: [
      { bg: "Едно бира, моля!", translit: "Edno bira, molya!", en: "One beer, please!" },
      { bg: "Две бири, моля!", translit: "Dve biri, molya!", en: "Two beers, please!" },
      { bg: "Едно кафе, моля!", translit: "Edno kafe, molya!", en: "One coffee, please!" },
      { bg: "Вода, моля!", translit: "Voda, molya!", en: "Water, please!" },
      { bg: "Менюто, моля!", translit: "Menyuto, molya!", en: "The menu, please!" },
      { bg: "Сметката, моля!", translit: "Smetkata, molya!", en: "The bill, please!" },
      { bg: "Колко струва?", translit: "Kolko struva?", en: "How much is it?" },
      { bg: "Наздраве!", translit: "Nazdrave!", en: "Cheers!" },
    ],
  },
  {
    title: "Getting around",
    color: "bg-sky-50 border-sky-200",
    headerColor: "bg-sky-100",
    phrases: [
      { bg: "Където е метрото?", translit: "Kyde e metroto?", en: "Where is the metro?" },
      { bg: "Където е автобусът?", translit: "Kyde e avtobusyt?", en: "Where is the bus?" },
      { bg: "Где е спирката?", translit: "Gde e spirkata?", en: "Where is the stop?" },
      { bg: "Колко струва билетът?", translit: "Kolko struva biletat?", en: "How much is the ticket?" },
      { bg: "До центъра, моля.", translit: "Do tsentyra, molya.", en: "To the centre, please." },
      { bg: "Наляво", translit: "Nalyavo", en: "To the left" },
      { bg: "Надясно", translit: "Nadyasno", en: "To the right" },
      { bg: "Направо", translit: "Napravo", en: "Straight ahead" },
    ],
  },
  {
    title: "Essentials",
    color: "bg-rose-50 border-rose-200",
    headerColor: "bg-rose-100",
    phrases: [
      { bg: "Където е тоалетната?", translit: "Kyde e toaletnata?", en: "Where is the toilet?" },
      { bg: "Болница", translit: "Bolnitsa", en: "Hospital" },
      { bg: "Аптека", translit: "Apteka", en: "Pharmacy" },
      { bg: "Полиция", translit: "Politsiya", en: "Police" },
      { bg: "Помощ!", translit: "Pomosht!", en: "Help!" },
      { bg: "Обадете се на линейка!", translit: "Obadete se na lineyka!", en: "Call an ambulance!" },
      { bg: "Губя се.", translit: "Gubya se.", en: "I am lost." },
      { bg: "Откраднаха ми чантата.", translit: "Otkradnakha mi chantata.", en: "My bag was stolen." },
    ],
  },
  {
    title: "Communication",
    color: "bg-emerald-50 border-emerald-200",
    headerColor: "bg-emerald-100",
    phrases: [
      { bg: "Говорите ли английски?", translit: "Govorite li angliyski?", en: "Do you speak English?" },
      { bg: "Не разбирам.", translit: "Ne razbiram.", en: "I don't understand." },
      { bg: "Не говоря български.", translit: "Ne govorya bylgarski.", en: "I don't speak Bulgarian." },
      { bg: "Можете ли да повторите?", translit: "Mozhete li da povtorite?", en: "Can you repeat that?" },
      { bg: "По-бавно, моля.", translit: "Po-bavno, molya.", en: "Slower, please." },
      { bg: "Колко е часът?", translit: "Kolko e chasat?", en: "What time is it?" },
      { bg: "Откъде сте?", translit: "Otkyde ste?", en: "Where are you from?" },
      { bg: "Аз съм от Англия.", translit: "Az sym ot Angliya.", en: "I am from England." },
    ],
  },
  {
    title: "Accommodation",
    color: "bg-purple-50 border-purple-200",
    headerColor: "bg-purple-100",
    phrases: [
      { bg: "Имам резервация.", translit: "Imam rezervatsiya.", en: "I have a reservation." },
      { bg: "Стая за една нощ, моля.", translit: "Staya za edna nosht, molya.", en: "A room for one night, please." },
      { bg: "Включен ли е закускът?", translit: "Vklyuchen li e zakuskat?", en: "Is breakfast included?" },
      { bg: "Wi-Fi паролата, моля.", translit: "Wi-Fi parolata, molya.", en: "The Wi-Fi password, please." },
      { bg: "Кога е изписването?", translit: "Koga e izpisvane to?", en: "When is check-out?" },
    ],
  },
];

export default function TouristPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <Link href="/learn" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">← Learn</Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800">Tourist Survival</h1>
        <p className="text-gray-500 text-sm mt-1">
          Essential phrases for visiting Bulgaria. Learn these and you will cover most situations — locals will love that you tried!
        </p>
      </div>

      {/* Pro tips */}
      <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl px-5 py-4 text-sm text-teal-900 flex flex-col gap-2">
        <div className="font-bold text-base">Quick wins before you go</div>
        <ul className="list-disc list-inside space-y-1 text-teal-800">
          <li><strong>Да</strong> (Da) = Yes &nbsp;·&nbsp; <strong>Не</strong> (Ne) = No — but Bulgarians nod for No and shake for Yes!</li>
          <li><strong>Моля</strong> (Molya) = Please / You're welcome</li>
          <li><strong>Благодаря</strong> (Blagodarya) = Thank you</li>
          <li><strong>Извинете</strong> (Izvinete) = Excuse me / Sorry</li>
          <li>Bulgarian uses the Cyrillic alphabet — many signs also have Latin transliterations in cities.</li>
        </ul>
      </div>

      {sections.map((s) => (
        <section key={s.title} className="flex flex-col gap-3">
          <h2 className="font-semibold text-gray-700">{s.title}</h2>
          <div className={`overflow-x-auto rounded-2xl border ${s.color} bg-white`}>
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b border-gray-100 ${s.headerColor}`}>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Bulgarian</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-400">Pronunciation</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">English</th>
                </tr>
              </thead>
              <tbody>
                {s.phrases.map((p, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-bold text-gray-900">{p.bg}</td>
                    <td className="px-4 py-3 text-gray-400 italic text-xs">{p.translit}</td>
                    <td className="px-4 py-3 text-gray-700">{p.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}

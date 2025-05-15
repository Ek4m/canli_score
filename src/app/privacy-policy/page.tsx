import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gizlilik siyasəti",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full !mt-5">
      <div>
        <h1 className="text-3xl font-bold !mb-6 text-center">
          Gizlilik Siyasəti
        </h1>
        <p className="!mb-4">
          <b>Scorewatt.com</b> olaraq istifadəçilərimizin şəxsi məlumatlarının
          təhlükəsizliyi və məxfiliyinin qorunması bizim üçün prioritetdir. Bu
          gizlilik siyasəti Scorewatt.com saytına daxil olduqda və xüsusilə
          qeydiyyat etdikdə hansı məlumatların toplanıldığını, necə istifadə
          edildiyini və qorunduğunu izah edir.
        </p>
        <br />
        <hr />
        <br />
        <h2 className="text-xl font-semibold mt-8 !mb-2">
          1. Toplanan Məlumatlar
        </h2>
        <p className="!mb-2">
          Qeydiyyat və istifadə zamanı aşağıdakı şəxsi və texniki məlumatları
          toplaya bilərik:
        </p>
        <ul className="list-disc pl-6 !mb-6">
          <li>
            <strong>Şəxsi məlumatlar:</strong> Ad, soyad, e-poçt ünvanı,
            istifadəçi adı, şifrə (kriptolanmış şəkildə saxlanılır)
          </li>
          <li>
            <strong>Texniki məlumatlar:</strong> IP ünvanı, brauzer tipi və
            versiyası, cihaz məlumatları və əməliyyat sistemi, saytdakı
            fəaliyyətlər
          </li>
        </ul>
        <p className="!mb-2">
          <strong>Çərəzlər və izləmə texnologiyaları:</strong>
        </p>
        <p className="!mb-2">
          Scorewatt.com saytında istifadəçi təcrübəsini təkmilləşdirmək və
          saytın istifadəsini analiz etmək məqsədilə çərəzlərdən (cookies) və
          analitik izləmə texnologiyalarından istifadə olunur. Bunlara
          aşağıdakılar daxildir:
        </p>
        <ul className="list-disc pl-6 !mb-4">
          <li>
            Saytımız Yandex Metrica xidmətindən istifadə edir (heatmap,
            scrollmap, kliklər və mouse hərəkətləri ilə analizlər).
          </li>
          <li>
            Məlumatlar anonim şəkildə emal edilir və şəxsiyyət müəyyənləşdirmək
            üçün istifadə olunmur.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 !mb-2">
          2. Məlumatların İstifadə Məqsədi
        </h2>
        <ul className="list-disc pl-6 !mb-4">
          <li>İstifadəçi hesabının yaradılması və idarə olunması</li>
          <li>Giriş təhlükəsizliyinin təmin edilməsi</li>
          <li>Saytın funksiyalarının düzgün işləməsi</li>
          <li>İstifadəçi təcrübəsinin təkmilləşdirilməsi</li>
          <li>Statistika və analiz məqsədilə (anonim şəkildə)</li>
          <li>Xəbərdarlıqlar və vacib bildirişlərin göndərilməsi</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 !mb-2">
          3. Məlumatların Qorunması
        </h2>
        <p className="!mb-4">
          Şəxsi məlumatlarınızın qorunması üçün müvafiq texniki və inzibati
          tədbirlər görülür. Məlumatlar SSL şifrələmə ilə ötürülür və istifadəçi
          şifrələri təhlükəsiz şəkildə kriptolanır.
        </p>

        <h2 className="text-xl font-semibold mt-8 !mb-2">
          4. Məlumatların Üçüncü Tərəflərlə Paylaşılması
        </h2>
        <p className="!mb-4">
          Məlumatlarınız heç bir halda üçüncü şəxslərlə paylaşılmır, satılmır və
          kommersiya məqsədilə ötürülmür. Yalnız aşağıdakı hallarda paylaşım
          mümkündür:
        </p>
        <ul className="list-disc pl-6 !mb-4">
          <li>Qanunvericiliyin tələb etdiyi hallar</li>
          <li>Hüquqi tələblərin yerinə yetirilməsi</li>
          <li>
            Fırıldaqçılıq və ya təhlükəsizlik risklərinin qarşısını almaq
            məqsədilə
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 !mb-2">
          5. İstifadəçi Hüquqları
        </h2>
        <ul className="list-disc pl-6 !mb-4">
          <li>Öz şəxsi məlumatlarına baxmaq və düzəliş etmək</li>
          <li>Hesablarını silmək və ya deaktiv etmək</li>
          <li>Məlumatların silinməsini tələb etmək (müəyyən hallarda)</li>
        </ul>
        <p className="!mb-4">
          Bu hüquqlardan istifadə etmək üçün bizimlə əlaqə saxlaya bilərsiniz:{" "}
          <a
            href="mailto:support@scorewatt.com"
            className="text-blue-600 underline"
          >
            support@scorewatt.com
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8 !mb-2">
          6. Çərəzlərdən İmtina
        </h2>
        <p className="!mb-4">
          İstifadəçi istədiyi halda brauzer ayarları vasitəsilə çərəzləri
          deaktiv edə bilər. Lakin bu, saytın bəzi funksiyalarının düzgün
          işləməsinə mane ola bilər.
        </p>

        <h2 className="text-xl font-semibold mt-8 !mb-2">
          7. Digər Saytlara Keçidlər
        </h2>
        <p className="!mb-4">
          Saytımız digər vebsaytlara keçidlər təqdim edə bilər. Bu saytların
          məxfiliyinə görə məsuliyyət daşımırıq. Onların gizlilik siyasətlərini
          ayrıca oxumağınızı tövsiyə edirik.
        </p>

        <h2 className="text-xl font-semibold mt-8 !mb-2">
          8. Siyasətə Dəyişikliklər
        </h2>
        <p className="!mb-4">
          Gizlilik siyasətimizdə dəyişiklik edildikdə bu səhifədə yenilənmiş
          şəkildə yayımlanacaq. Ən son versiyanı izləməyiniz tövsiyə olunur.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

# 🐱 CatCat - Facts About Cats

Веб-додаток для перегляду цікавих фактів про котів з можливістю пошуку, фільтрації та персоналізації.

## 🚀 Особливості

- **Факти про котів** - отримання фактів з [catfact.ninja API](https://catfact.ninja/)
- **Пошук та фільтрація** - пошук по тексту, фільтрація за довжиною, сортування
- **Система авторизації** - збереження імені користувача в localStorage
- **Темна/світла тема** - перемикач теми з збереженням в localStorage
- **Responsive дизайн** - адаптивний інтерфейс для всіх пристроїв
- **SSR підтримка** - server-side rendering з Nuxt 3
- **Пагінація** - підвантаження нових фактів
- **Окремі сторінки фактів** - детальний перегляд кожного факту
- **Красивий лоадер** - анімований індикатор завантаження

## 🛠 Технології

### Frontend Framework
- **[Nuxt 3](https://nuxt.com/)** - Full-stack фреймворк на базі Vue 3
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **TypeScript** - типізація для кращої розробки

### Стилі
- **[Tailwind CSS](https://tailwindcss.com/)** - utility-first CSS framework
- **SCSS** - препроцесор для стилів
- **Custom CSS Variables** - для темної/світлої теми

### State Management
- **[Pinia](https://pinia.vuejs.org/)** - Vue.js store library
- **[@pinia/nuxt](https://pinia.vuejs.org/ssr/nuxt.html)** - Nuxt 3 інтеграція
- **[pinia-plugin-persistedstate](https://github.com/prazdevs/pinia-plugin-persistedstate)** - збереження стану в localStorage

### API & Data
- **[Cat Facts API](https://catfact.ninja/)** - зовнішнє API для отримання фактів
- **Nuxt $fetch** - вбудований HTTP клієнт
- **Composables** - переіспользуемая логіка для API запитів

### Routing & Navigation
- **Nuxt Router** - файл-базована маршрутизація
- **Dynamic Routes** - динамічні маршрути для окремих фактів
- **Middleware** - захист маршрутів (auth.global.js)

### Розробка
- **Vite** - швидкий bundler (вбудований в Nuxt 3)
- **Auto-imports** - автоматичний імпорт компонентів та композиції
- **Hot Module Replacement** - швидка розробка

## 📁 Структура проекту

```
catcat/
├── assets/
│   └── style/
│       └── main.scss          # Основні стилі
├── components/
│   ├── Buttons/
│   │   └── MainButton.vue     # Переіспользуемая кнопка
│   ├── Header.vue             # Хедер з навігацією
│   ├── Footer.vue             # Футер сайту
│   ├── LoadingPost.vue        # Індикатор завантаження
│   ├── AppLoading.vue         # Глобальний лоадер
│   └── SwitchTheme.vue        # Перемикач теми
├── composables/
│   └── useCatFacts.js         # Логіка роботи з API
├── middleware/
│   └── auth.global.js         # Глобальний middleware авторизації
├── pages/
│   ├── index.vue              # Головна сторінка
│   ├── login.vue              # Сторінка логіну
│   └── facts/
│       ├── index.vue          # Список фактів
│       └── fact/
│           └── [id].vue       # Окремий факт
├── plugins/
│   └── app-loading.client.js  # Клієнтський плагін лоадера
├── public/
│   ├── cats/                  # Зображення котів (cat1.webp - cat9.webp)
│   ├── logo.webp              # Логотип
│   └── favicon.ico            # Іконка сайту
├── server/                    # Server-side код
├── stores/
│   ├── user.js                # Store користувача
│   └── loading.js             # Store лоадера
├── utils/
│   └── index.ts               # Утилітарні функції
├── nuxt.config.ts             # Конфігурація Nuxt
├── tailwind.config.js         # Конфігурація Tailwind CSS
└── package.json               # Залежності проекту
```

## 🎨 UI/UX Features

- **Адаптивний дизайн** - працює на всіх розмірах екранів
- **Темна/світла тема** - з збереженням вибору користувача
- **Hover ефекти** - інтерактивні елементи з плавними переходами
- **Loading states** - індикатори завантаження для кращого UX
- **Error handling** - обробка помилок API
- **Toast notifications** - (можна додати в майбутньому)

## 📱 Сторінки

1. **/ (Home)** - головна сторінка з описом
2. **/login** - авторизація користувача
3. **/facts** - список всіх фактів з пошуком і фільтрами
4. **/facts/fact/[id]** - окремий факт з деталями

## 🔐 Авторизація

- Збереження імені користувача в `localStorage`
- Захист маршрутів через middleware
- Персоналізований хедер з аватаром
- Можливість logout

## 🎯 API Integration

### Cat Facts API
- **GET /facts** - отримання списку фактів
- **Параметри**: limit, page
- **Пагінація** - підвантаження по 10 фактів
- **Error handling** - обробка помилок мережі

## ⚙️ Встановлення та запуск

### Системні вимоги
- Node.js 18+
- npm або yarn

### Кроки встановлення

1. **Клонуйте репозиторій**
```bash
git clone https://github.com/yourusername/catcat.git
cd catcat
```

2. **Встановіть залежності**
```bash
npm install
# або
yarn install
```

3. **Запустіть в режимі розробки**
```bash
npm run dev
# або
yarn dev
```

4. **Відкрийте браузер**
```
http://localhost:3000
```

### Інші команди

```bash
# Збірка для продакшну
npm run build

# Перегляд продакшн збірки
npm run preview

# Генерація статичних файлів
npm run generate

# Лінтінг коду
npm run lint

# Перевірка типів TypeScript
npm run type-check
```

## 🌍 Розгортання

### Netlify / Vercel
```bash
npm run build
```

### Static hosting
```bash
npm run generate
```

### Docker (опціонально)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

## 📝 Конфігурація

### Environment Variables
```bash
# .env
NUXT_PUBLIC_API_BASE_URL=https://catfact.ninja
```

### Tailwind Custom Colors
```css
:root {
  --light-main: #F8F8F8;
  --dark-main: #1C1C1C;
  --light-header-bg: #FFFFFF;
  --dark-header-bg: #2C2C2C;
}
```

## 🤝 Contributing

1. Fork репозиторій
2. Створіть feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit зміни (`git commit -m 'Add some AmazingFeature'`)
4. Push до branch (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

## 📄 Ліцензія

Цей проект ліцензований під MIT License - дивіться [LICENSE](LICENSE) файл для деталей.

## 👨‍💻 Автор

**Ваше ім'я**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Подяки

- [Cat Facts API](https://catfact.ninja/) за надання фактів про котів
- [Unsplash](https://unsplash.com/) за красиві зображення котів
- Nuxt.js та Vue.js команди за чудові фреймворки

---

⭐ Поставте зірку, якщо вам сподобався проект!

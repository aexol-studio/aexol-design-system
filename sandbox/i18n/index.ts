import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import en from './en.json'

const lng = 'en'

const resources = {
  en: {
    translation: en
  }
}

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

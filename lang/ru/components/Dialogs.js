export default {
  header: 'Диалог',
  headerText: 'Компонент `v-dialog` информирует пользователей о конкретной задаче и может содержать критическую информацию, принимать решения или включать несколько задач. Используйте диалоги экономно, потому что они прерываются.',
  components: ['v-dialog'],
  examples: [{
    simple: {
      header: 'Простые диалоги',
      desc: 'Выбор опции немедленно выполняет эту опцию и закрывает меню. Прикосновение к окну диалога или нажатие клавиши «Back» отменяет действие и закрывает диалог.',
      uninverted: true
    },
    withoutActivator: {
      header: 'Без активатора',
      desc: 'Если по какой-то причине вы не можете использовать слот активатора, обязательно добавьте модификатор `.stop` в событие, которое запускает диалог.',
      uninverted: true
    },
    modal: {
      header: 'Модальный',
      desc: 'Подобно простому диалогу, за исключением того, что он не убирается при касании снаружи.',
      uninverted: true
    },
    fullscreen: {
      header: 'Полноэкранный',
      desc: 'Из-за ограниченного пространства полноэкранные диалоги могут быть более подходящими для мобильных устройств, чем диалоги, используемые на устройствах с большими экранами.',
      uninverted: true
    },
    form: {
      header: 'Форма',
      desc: 'Просто простой пример формы в диалоговом окне.',
      uninverted: true
    },
    scrollable: {
      header: 'Прокручиваемый',
      desc: 'Пример диалога с прокручиваемым контентом.',
      uninverted: true
    },
    overflowed: {
      header: 'Переполнение',
      desc: 'Модификации, которые не помещаются в доступное пространство окна, будут прокручивать контейнер.',
      uninverted: true
    }
  }],
  props: {
    disabled: 'Отключено возможность открытия диалога',
    fullWidth: 'Указывает, что модальное действие 100% ширины',
    fullscreen: 'Изменение макета для полноэкранного отображения',
    hideOverlay: 'Скрыть отображение наложения',
    lazy: 'Mixins.Bootable.props.lazy',
    maxWidth: 'Максимальная ширина содержимого',
    origin: 'Mixins.Transitionable.props.origin',
    persistent: 'Клик снаружи не отменяет диалог',
    scrollable: 'Если установлено значение true, ожидается карта, название карты, текст карты и действия карты. Кроме того, текст карты должен иметь указанную высоту. Устанавливает перенос текста карты на переполнение',
    width: 'Устанавливает ширину диалогового окна'
  }
}
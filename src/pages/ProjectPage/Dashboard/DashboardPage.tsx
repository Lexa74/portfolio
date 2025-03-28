import styles from '../page.module.css';

export const DashboardPage = () => {
  return (
    <>
      <h1>
        CampaignCore Dashboard: Гибкий и функциональный интерфейс для аналитики
      </h1>
      <div className={styles.divider}></div>
      <div>
        <h2>О проекте</h2>
        <p className={styles.mb20}>
          Этот дашборд был создан в рамках курса по UI/UX-дизайну для отработки
          навыков проектирования высоконагруженных интерфейсов. Основная цель —
          разработать понятную, стильную и консистентную систему визуализации
          данных, которая помогает пользователям быстро анализировать ключевые
          показатели бизнеса.
        </p>
      </div>
      <img src="/image/project/dashboard/dashLight.png" alt="" />
      <h2>Что было сделано</h2>
      <p>
        Мною были разработаны светлая и тёмная темы, обеспечивающие комфортное
        восприятие информации в разных условиях, продумана визуальная иерархия:
        крупные показатели выделены, а вспомогательная информация представлена
        ненавязчиво. Все элементы дашборда объединены единой системой
        компонентов, что повышает его консистентность и читаемость.
      </p>
      <img src="/image/project/dashboard/dashDark.png" alt="" />
      <h2>Результат</h2>
      <p>
        Получился интуитивно понятный и визуально сбалансированный дашборд,
        который упрощает анализ данных и делает работу с аналитикой удобнее.
        Этот кейс демонстрирует мой навык создания сложных интерфейсов,
        в которых сочетаются функциональность, стиль и визуальная гармония.
      </p>
    </>
  );
};

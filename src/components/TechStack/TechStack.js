import styles from './TechStack.module.css';

const techs = [
  'NEXT.JS', 'NODE.JS', 'AWS', 'TYPESCRIPT', 'POSTGRES', 'DOCKER',
  'GRAPHQL', 'REDIS', 'REACT NATIVE', 'KUBERNETES'
];

const TechStack = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.track}>
          {techs.concat(techs).map((tech, index) => (
            <div key={index} className={styles.techItem}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

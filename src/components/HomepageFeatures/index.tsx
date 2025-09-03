import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Standards Compliant',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Built on the RO-Crate specification for research data packaging. Ensures interoperability with JSON-LD, Schema.org, and FAIR principles. Conformant with
        LDAC profiles for language and cultural data.
      </>
    ),
  },
  {
    title: 'RESTful Design',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Clean, predictable API following REST best practices. Comprehensive OpenAPI 3.1.0 specification with detailed documentation. Consistent error handling
        and response formats across all endpoints.
      </>
    ),
  },
  {
    title: 'Flexible Authentication',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Multiple authentication methods: OAuth2, OpenID Connect, and API Keys. Public access for open research data with fine-grained access control.
        Enterprise-ready with rate limiting and comprehensive monitoring.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

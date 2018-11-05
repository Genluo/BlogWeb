import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import WithLink from '../WithLink';
import Division from '../Division';

const IconTitle = ({
  icon,
  name,
  children,
}) => (
  <li>
    <i><i className={`fas fa-${icon}`} /></i>
    <span>
      {`${name} :`}
    </span>
    {children}
    <style jsx>
      {`
        @media screen and (max-width: 1340px) {
          span {
            display: none;
          }
        }
        li {
          padding: 0 10px 0 10px;
          line-height: 1;
          margin: 2px 0px;
          color: rgb(153, 153, 153);
        }
        li i {
          display: inline-block;
          line-height: 1;
          margin-right: 2px;
        }
      `}
    </style>
  </li>
);

IconTitle.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const SpanLink = ({
  link,
  children,
}) => (
  <span>
    <WithLink href={link}>
      <a href={false}>
        {children}
      </a>
    </WithLink>
    <style jsx>
      {`
        span {
          text-decoration: underline;
          display: inline-block;
        }
        a {
          color: rgb(153, 153, 153);
          cursor: pointer;
        }
      `}
    </style>
  </span>
);

SpanLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default class Title extends React.Component {
  static defaultProp = {
    data: {},
    articleId: 0,
    categroyId: 0,
    title: 'loading...',
    updateTime: '2018-5-5',
    createTime: '2018-5-5',
    categroyName: 'loafing...',
    tags: [''],
    readNum: 0,
  };

  static propTypes = {
    articleId: PropTypes.number.isRequired,
    categroyId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    updateTime: PropTypes.string.isRequired,
    createTime: PropTypes.string.isRequired,
    categroyName: PropTypes.string.isRequired,
    readNum: PropTypes.number.isRequired,
    tags: PropTypes.shape([]).isRequired,
    data: PropTypes.shape({}).isRequired,
  }


  renderTags = () => {
    const { tags } = this.props;
    const tag = [];
    tags.forEach((item) => {
      tag.push(<><SpanLink link={`/blog/tag/${item.tag_id}`}>{item.name}</SpanLink></>);
      tag.push(<span>、</span>);
    });
    tag.pop();
    return tag;
  }

  render() {
    const {
      data,
      articleId,
      categroyId,
      title,
      updateTime,
      createTime,
      categroyName,
      readNum,
    } = this.props;

    const list = [{
      icon: 'calendar-check',
      name: '发表于',
      value: moment(createTime).format('YYYY-DD-MM h:mm'),
    }, {
      icon: 'calendar',
      name: '更新于',
      value: moment(updateTime).format('YYYY-DD-MM h:mm'),
    }, {
      icon: 'folder',
      name: '分类于',
      value: <SpanLink link={`/blog/category/${categroyId}`}>{categroyName}</SpanLink>,
    }, {
      icon: 'tags',
      name: '标签',
      value: this.renderTags(),
    }, {
      icon: 'eye',
      name: '阅读数',
      value: readNum,
    }];

    return (
      <div>
        <h1>
          <span>
            <WithLink
              paramsData={data}
              href="/blog/article"
              as={`/blog/${articleId}`}
            >
              <span>{title}</span>
            </WithLink>
          </span>
        </h1>
        <div className="data">
          <ul>
            {
              list.map((item, index) => (
                index === list.length - 1 ? (
                  <IconTitle
                    icon={item.icon}
                    name={item.name}
                  >
                    {
                      item.value
                    }
                  </IconTitle>) : (
                  <>
                    <IconTitle
                      icon={item.icon}
                      name={item.name}
                    >
                      {
                        item.value
                      }
                    </IconTitle>
                    <li>
                      <Division />
                    </li>
                </>
                )
              ))
            }
          </ul>
        </div>
        <style jsx>
          {`
            h1 {
              text-align: center;
              font-weight: 500;
              margin-bottom: 20px;
              cursor: pointer;
            }
            ul {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              height: 17px;
            }
            ul li {
              height: 13px;
            }
            h1 span:hover {
              height: 23px;
              border-bottom: 2px solid #000;
            }
        `}
        </style>
      </div>
    );
  }
}

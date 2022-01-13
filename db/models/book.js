module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define("books", {
      title: {
        type: DataTypes.STRING(255),
        comment: '제목'
      },
      author: {
        type: DataTypes.STRING(255),
        comment: '저자'
      },
      price: {
        type: DataTypes.INTEGER,
        comment: '가격',
        validate: {
          isEven(value) {
            if (value < 0) {
              throw new Error('Price must be a postive number');
            }
          }
        },
      },
    }, {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "books", // 테이블 이름
      timestamps: true, // createAt & updateAt 활성화
      paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
    });
  
    return Books;
  };
[
    '{{repeat(10, 7)}}',
    {
        _id: '{{objectId()}}',
        id: '{{firstName()}}',
        pw: '{{guid()}}',
        index: '{{index()}}',
        picture: 'http://placehold.it/32x32',
        age: '{{integer(20, 40)}}',
        eyeColor: '{{random("blue", "brown", "green")}}',
        name: '{{firstName()}} {{surname()}}',
        gender: '{{gender()}}',
        company: '{{company().toUpperCase()}}',
        email: '{{email()}}',
        phone: '+1 {{phone()}}',
        address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
        grade: '{{random("새싹", "일반", "실버", "골드", "다이아몬드", "관리자")}}'
    }
]
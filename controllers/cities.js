const { cityList } = require('../utils/cities')

exports.getCitites = (req, res) => {
    let newCityList = []
    for (let city of cityList) {
        let flag = true
        for (let i = 0; i < newCityList.length; i++) {
            let newCity = newCityList[i]
            if (newCity.city === city.city && newCity.district === city.district && newCity.state === city.state) {
                flag = false
                break;
            }
        }
        if (flag)
            newCityList.push(city)
    }
    return res.json({
        cities: newCityList,
        count:newCityList.length,
        code: 'success',
        status: 200,
    })
}

exports.getStates = (req, res) => {

}
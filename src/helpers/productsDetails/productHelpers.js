import _ from "lodash";

export const is_colour = (words) => {
    if (words.indexOf("colour") >= 0) {
        return true;
    }
    if (words.indexOf("Colour") >= 0) {
        return true;
    }
    if (words.indexOf("color") >= 0) {
        return true;
    }
    return words.indexOf("Color") >= 0;
};

export const is_size = (words) => {
    if (words.indexOf("Size") >= 0) {
        return true;
    }
    if (words.indexOf("size") >= 0) {
        return true;
    }
    return false;
};

export const getProductGroupedAttributes = (Attributes) => {
    if (!_.isEmpty(Attributes) && _.isArray(Attributes)) {
        return _.groupBy(Attributes, "PropertyName");
    }
    return {};
};
export const getProductAttributes = (product) => {
    // console.log(product)
    if (_.isObject(product)) {
        const ConfiguredItems = product.ConfiguredItems;
        return _.isArray(ConfiguredItems) ? ConfiguredItems : [];
    }
    return [];
};

export const getColorAttributes = (Attributes) => {
    if (!_.isEmpty(Attributes)) {
        return Attributes.filter((filter) => {
            if (filter.IsConfigurator === true) {
                return is_colour(filter.PropertyName);
            }
            return false;
        });
    }
    return [];
};

export const getSizeAttributes = (Attributes) => {
    if (!_.isEmpty(Attributes)) {
        return Attributes.filter((filter) => {
            if (filter.IsConfigurator === true) {
                return is_size(filter.PropertyName);
            }
            return false;
        });
    }
    return [];
};

export const ConfiguratorAttributes = (Product) => {
    const Attributes = Product?.Attributes;
    // console.log(Attributes)
    if (Attributes?.length > 0) {
        return Attributes.filter((filter) => filter.IsConfigurator === true);
    }
    return [];
};

export const getVariantData = (colorProp, product) => {
    // console.log(product)
    const matchedData = [];
    product?.ConfiguredItems?.map((attr) => {
        // console.log(attr)
        if (_.isEqual(attr?.Configurators[0], colorProp)) {
            matchedData.push(attr);
        }
    });
    // console.log(matchedData)

    const finalData = [];

    for (const element of matchedData) {
        const { Pid, Vid } = element?.Configurators[1];
        product?.Attributes.filter((size) => {
            if (size.Pid === Pid && size.Vid === Vid) {
                finalData.push({ element, size });
            }
        });
    }

    return finalData;
};


export const formatDate =(date)=>{
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
    return `${day}/${month}/${year}`;
}

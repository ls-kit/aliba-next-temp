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
        const Attributes = product.Attributes;
        return _.isArray(Attributes) ? Attributes : [];
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
    const Attributes = getProductAttributes(Product);
  if (Attributes.length > 0) {
    return Attributes.filter((filter) => filter.IsConfigurator === true);
  }
  return [];
};

export const getVariantData = (colorProp, product) => {
    const { ConfiguredItems, Attributes } = product || {}; // Destructure ConfiguredItems and Attributes

    const matchedData = [];
    const finalData = [];

    if (colorProp) {
        // Check if ConfiguredItems is defined and iterable
        if (Array.isArray(ConfiguredItems)) {
            ConfiguredItems.forEach((attr) => {
                if (_.isEqual(attr?.Configurators[0], colorProp)) {
                    matchedData.push(attr);
                }
            });
        }
    
        for (const element of matchedData) {
            const { Pid, Vid } = element?.Configurators[1];
            // Check if Attributes is defined and iterable
            if (Array.isArray(Attributes)) {
                Attributes.forEach((size) => {
                    if (size.Pid === Pid && size.Vid === Vid) {
                        finalData.push({ element, size });
                    }
                });
            }
        }
    }

    if (!colorProp) {
        // Check if ConfiguredItems is defined and iterable
        if (Array.isArray(ConfiguredItems)) {
            ConfiguredItems.forEach((element) => {
                const { Pid, Vid } = element?.Configurators[0];
                // Check if Attributes is defined and iterable
                if (Array.isArray(Attributes)) {
                    Attributes.forEach((size) => {
                        if (size.Pid === Pid && size.Vid === Vid) {
                            finalData.push({ element, size });
                        }
                    });
                }
            });
        }
    }

    return finalData;
};



export const formatDate =(date)=>{
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
    return `${day}/${month}/${year}`;
}

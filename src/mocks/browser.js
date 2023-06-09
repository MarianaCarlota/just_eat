import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/bypostcode/ec4m", (req, res, ctx) => {
return res(ctx.json({
  "Area": "Fleet Street",
  "MetaData": {
    "CanonicalName": "ec4-fleetstreet",
    "District": "EC4",
    "Postcode": "EC4",
    "Area": "Fleet Street",
    "Latitude": 0,
    "Longitude": 0,
    "CuisineDetails": [
      {
        "Name": "Danish",
        "SeoName": "danish",
        "Total": 171
      }
      ],
      "ResultCount": 1,
      "SearchedTerms": null,
      "TagDetails": [
      {
        "BackgroundColour": "#E6F6C5",
        "Colour": "#04822C",
        "DisplayName": "Tried and Tasted",
        "Key": "tried-and-tasted",
        "Priority": 300
      }
      ]
    },
  "Restaurants": [
    {
      "Id": 102215,
      "Name": "TEST_DP_1",
      "UniqueName": "test_dp-london-london",
      "Address": {
        "City": "London",
        "FirstLine": "London",
        "Postcode": "EC4M 7RF",
        "Latitude": 51.516454,
        "Longitude": -0.103137
      },
      "City": "London",
      "Postcode": "EC4M 7RF",
      "Latitude": 0,
      "Longitude": 0,
      "Rating": {
        "Count": 0,
        "Average": 0,
        "StarRating": 0
      },
      "RatingStars": 0,
      "NumberOfRatings": 0,
      "RatingAverage": 0,
      "Description": "",
      "Url": "https://www.just-eat.co.uk/restaurants-test_dp-london-london",
      "LogoUrl": "http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/102215.gif",
      "BannerUrl": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/{transformations}/v1676933415/static-takeaway-com/images/generic/heroes/541/541_burger_158",
      "IsTestRestaurant": false,
      "IsHalal": false,
      "IsNew": false,
      "ReasonWhyTemporarilyOffline": "",
      "DriveDistance": 0,
      "DriveInfoCalculated": true,
      "IsCloseBy": true,
      "OfferPercent": 0,
      "NewnessDate": "2017-05-02T14:30:21",
      "OpeningTime": "2019-11-19T01:00:00Z",
      "OpeningTimeUtc": null,
      "OpeningTimeIso": "2019-11-19T01:00:00",
      "OpeningTimeLocal": "2019-11-19T01:00:00",
      "DeliveryOpeningTimeLocal": "2019-11-18T01:00:00",
      "DeliveryOpeningTime": "2019-11-18T01:00:00Z",
      "DeliveryOpeningTimeUtc": null,
      "DeliveryStartTime": "2019-11-18T01:00:00Z",
      "DeliveryTime": null,
      "DeliveryTimeMinutes": null,
      "DeliveryWorkingTimeMinutes": 10,
      "DeliveryEtaMinutes": {
        "Approximate": null,
        "RangeLower": 10,
        "RangeUpper": 25
      },
      "IsCollection": false,
      "IsDelivery": true,
      "IsFreeDelivery": false,
      "IsOpenNowForCollection": false,
      "IsOpenNowForDelivery": true,
      "IsOpenNowForPreorder": false,
      "IsOpenNow": true,
      "IsTemporarilyOffline": false,
      "DeliveryMenuId": 224651,
      "CollectionMenuId": null,
      "DeliveryZipcode": null,
      "DeliveryCost": 0.12,
      "MinimumDeliveryValue": 0,
      "SecondDateRanking": 0,
      "DefaultDisplayRank": 0,
      "SponsoredPosition": 0,
      "SecondDateRank": 0,
      "Score": 502,
      "IsTemporaryBoost": false,
      "IsSponsored": false,
      "IsPremier": false,
      "HygieneRating": null,
      "ShowSmiley": false,
      "SmileyDate": null,
      "SmileyElite": false,
      "SmileyResult": null,
      "SmileyUrl": null,
      "SendsOnItsWayNotifications": false,
      "BrandName": "",
      "IsBrand": false,
      "LastUpdated": "2019-09-10T10:55:58.199397",
      "Deals": [
        {
          "Description": "20% off when you spend £20",
          "DiscountPercent": 20,
          "QualifyingPrice": 20,
          "OfferType": "Percent"
        }
      ],
      "Offers": [
        {
          "Amount": 20,
          "QualifyingValue": 20,
          "MaxQualifyingValue": 50,
          "Type": "Percent",
          "OfferId": "136149"
        }
      ],
      "Logo": [
        {
          "StandardResolutionURL": "http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/102215.gif"
        }
      ],
      "Tags": [],
      "DeliveryChargeBands": [],
      "CuisineTypes": [
        {
          "Id": 2,
          "IsTopCuisine": false,
          "Name": "English",
          "SeoName": "english"
        }
      ],
      "Cuisines": [
        {
          "Name": "English",
          "SeoName": "english"
        }
      ],
      "ScoreMetaData": [
        {
          "Key": "Distance",
          "Value": "0"
        },
        {
          "Key": "SetName",
          "Value": "Default"
        }
      ],
      "Badges": [],
      "OpeningTimes": [],
      "ServiceableAreas": []
    }
    ],
    "RestaurantSets": [],
    "CuisineSets": [
    {
      "Id": "user_and_local_cuisines",
      "Name": "",
      "Type": "area_cuisines",
      "Cuisines": [
      {
        "Name": "Pizza",
        "SeoName": "pizza"
      }
      ]
    }
    ],
    "Views": [],
    "Dishes": [],
    "ShortResultText": "EC4",
    "deliveryFees": {
    "restaurants": {
    "102215": {
    "restaurantId": "102215",
    "minimumOrderValue": 0,
    "bands": [
    {
      "minimumAmount": 0,
      "fee": 100
    }
  ]
  }
  }
  },
  "promotedPlacement": {
    "filteredSearchPromotedLimit": 5,
    "restaurants": {
      "84335": {
        "restaurantId": "84335",
        "defaultPromoted": true
      }
    },
    "rankedIds": [
    84335
    ]
  }
  }))
  })
)

worker.start()

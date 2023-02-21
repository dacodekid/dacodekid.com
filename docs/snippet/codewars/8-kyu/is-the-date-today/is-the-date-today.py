from datetime import datetime


def is_the_date_today(date):
    return datetime.today().date() == date.date()


print(is_the_date_today(datetime.strptime('2022-03-03', '%Y-%m-%d')))

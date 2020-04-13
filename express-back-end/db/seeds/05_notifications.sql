insert into notifications (habit_id, notification_type, scheduled_time)
values
  (1, 'sms', timestamp 'tomorrow'),
  (1, 'sms', timestamp 'today'),
  (2, 'sms', timestamp 'today'),
  (2, 'sms', timestamp 'tomorrow'),
  (2, 'sms', timestamp 'today');